import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

interface BookingFormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  comments: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const createEmailHTML = (data: BookingFormData) => {
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
  try {
    const formData: BookingFormData = req.body;
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      throw new Error('Missing email configuration');
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Booking Request from ${formData.name}`,
      html: createEmailHTML(formData),
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});