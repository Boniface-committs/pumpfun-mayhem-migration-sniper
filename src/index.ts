import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { sniperRoutes } from './routes/sniper.routes';
import { healthRoutes } from './routes/health.routes';
import { MigrationSniper } from './services/migration-sniper.service';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3007;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/health', healthRoutes);
app.use('/api/sniper', sniperRoutes);

app.use(errorHandler);

const migrationSniper = new MigrationSniper();

app.listen(PORT, () => {
  logger.info(`🎯 Migration Sniper server running on port ${PORT}`);
  
  if (process.env.SNIPER_ENABLED === 'true') {
    migrationSniper.start().catch((error) => {
      logger.error('Failed to start migration sniper:', error);
    });
  }
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  migrationSniper.stop();
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  migrationSniper.stop();
  process.exit(0);
});

export default app;

