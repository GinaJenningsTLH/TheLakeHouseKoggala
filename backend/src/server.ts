import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './config/cors';
import bookingRoutes from './routes/booking';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Add more detailed logging middleware
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// Add before your routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://thelakehousekoggala.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

// Move health check before other routes to ensure it's not blocked
app.get('/api/health', (_, res) => {  // Remove /api prefix
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', bookingRoutes);

// Handle all other routes by serving the frontend
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  // Only log if corsOptions.origin exists
  if (corsOptions?.origin) {
    console.log(`CORS origin: ${corsOptions.origin}`);
  }
});
