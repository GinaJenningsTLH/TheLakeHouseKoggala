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
    'http://thelakehousekoggala.com',
    'https://www.thelakehousekoggala.com',
    'https://localhost:5173',
    // Add any other allowed origins
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.options('*', cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Add logging middleware
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

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