import nodemailer from 'nodemailer';
import { BookingFormData } from '../types/index';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Missing email credentials in environment variables!');
}

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true // Add this for debugging
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP Error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

export const createEmailHTML = (data: BookingFormData) => {
  return `
    <h2>New Booking Request from The Lake House Website</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
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
    </table>
  `;
}; 