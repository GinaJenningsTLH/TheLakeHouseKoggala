import nodemailer from 'nodemailer';
import { BookingFormData } from '../types/index';
import dotenv from 'dotenv';

dotenv.config();

// Add validation for required environment variables
if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  console.error('Missing required email configuration');
  throw new Error('Missing email configuration');
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
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