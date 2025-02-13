import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './config/cors';
import bookingRoutes from './routes/booking';

dotenv.config();

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.options('*', cors(corsOptions));

// Health check endpoint
app.get('/api/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`CORS origin: ${corsOptions.origin}`);
});