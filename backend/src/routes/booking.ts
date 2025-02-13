import { Router } from 'express';
import { transporter, createEmailHTML } from '../services/email';
import { BookingFormData } from '../types';

const router = Router();

router.post('/send-email', async (req, res) => {
  try {
    // Verify we have credentials before attempting to send
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials not configured');
    }

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
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Booking Request from ${formData.name}`,
      html: createEmailHTML(formData),
    };

    console.log('Attempting to send email with options:', mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    
    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error: unknown) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? 
        error instanceof Error ? error.message : 'Unknown error' 
        : undefined
    });
  }
});

export default router; 