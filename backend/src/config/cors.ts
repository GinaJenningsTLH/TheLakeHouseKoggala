import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: [
    'https://www.thelakehousekoggala.com',
    'https://thelakehousekoggala.com',
    'https://thelakehousekoggala.onrender.com',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Accept', 'Origin', 'Authorization']
}; 