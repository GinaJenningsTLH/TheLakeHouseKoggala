"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS configuration
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept', 'Origin', 'Authorization']
};
// Middleware
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Add explicit OPTIONS handling
app.options('*', (0, cors_1.default)(corsOptions)); // Enable pre-flight for all routes
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
const createEmailHTML = (data) => {
    return `
    <h2>New Booking Request from The Lake House Website</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #f8f8f8;">Field</th>
        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #f8f8f8;">Details</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Name</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Email</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Check-in Date</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.checkIn}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Check-out Date</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.checkOut}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Number of Guests</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.guests}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px;">Additional Comments</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${data.comments || 'No comments provided'}</td>
      </tr>
    </table>
  `;
};
app.post('/api/send-email', async (req, res) => {
    console.log('Received request at /api/send-email');
    // ✅ Log request headers to check if Content-Type is correct
    console.log('Request Headers:', req.headers);
    // ✅ Log incoming request body (check if it's empty)
    console.log('Received form data:', req.body);
    if (!req.body || Object.keys(req.body).length === 0) {
        console.error('Error: Request body is empty.');
        return res.status(400).json({ error: 'Empty request body' });
    }
    try {
        const formData = req.body;
        console.log('Received form data:', formData);
        console.log('Current environment:', process.env.NODE_ENV);
        console.log('Gmail configuration:', {
            user: process.env.GMAIL_USER ? 'Set' : 'Not set',
            password: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set',
            recipient: process.env.RECIPIENT_EMAIL ? 'Set' : 'Not set'
        });
        // Validate environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
            console.error('Missing email configuration');
            return res.status(500).json({
                error: 'Server configuration error',
                details: 'Missing email configuration'
            });
        }
        // Validate request data
        if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
            return res.status(400).json({
                error: 'Invalid request',
                details: 'Missing required fields'
            });
        }
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Booking Request from ${formData.name}`,
            html: createEmailHTML(formData),
        };
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        console.error('Detailed error:', error);
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        res.status(500).json({
            error: 'Failed to send email',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`CORS origin: ${corsOptions.origin}`);
});
