import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './config/cors';
import bookingRoutes from './routes/booking';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://www.thelakehousekoggala.com',
    'http://thelakehousekoggala.com',
    'https://thelakehousekoggala.com',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));
app.use(express.json());

// Add more detailed logging middleware
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// Move health check before other routes to ensure it's not blocked
app.get('/api/health', (_, res) => {  // Remove /api prefix
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  // Only log if corsOptions.origin exists
  if (corsOptions?.origin) {
    console.log(`CORS origin: ${corsOptions.origin}`);
  }
});