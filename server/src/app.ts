import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import cardRoutes from './routes/cardRoutes';

// Load environment variables
dotenv.config();

// Create Express app
const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cards', cardRoutes);

const PORT = process.env.PORT || 5001;

// Server startup function
const startServer = async () => {
  try {
    // Verify environment variables
    console.log('Checking MongoDB URI:', process.env.MONGODB_URI ? 'Defined' : 'Not defined');
    
    // Connect to database
    await connectDB();
    
    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
};

startServer();

export default app;