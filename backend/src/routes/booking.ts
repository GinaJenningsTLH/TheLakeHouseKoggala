import { Router } from 'express';
import { transporter, createEmailHTML } from '../services/email';
import { BookingFormData } from '../types';

const router = Router();

router.post('/send-email', async (req, res) => {
  try {
    const formData: BookingFormData = req.body;
    console.log('Received form data:', formData);
    console.log('Current environment:', process.env.NODE_ENV);
    console.log('Gmail configuration:', {
      user: process.env.GMAIL_USER ? 'Set' : 'Not set',
      password: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set',
      recipient: process.env.RECIPIENT_EMAIL ? 'Set' : 'Not set'
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      console.error('Missing email configuration');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Missing email configuration'
      });
    }

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

    console.log('Attempting to send email with options:', mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    
    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Failed to send email:', error);
    console.error('Detailed error:', error instanceof Error ? error.stack : 'No stack trace');
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router; 