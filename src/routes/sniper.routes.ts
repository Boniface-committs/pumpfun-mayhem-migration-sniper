import { Router, Request, Response } from 'express';
import { MigrationSniper } from '../services/migration-sniper.service';

const router = Router();
const migrationSniper = new MigrationSniper();

router.get('/status', (req: Request, res: Response) => {
  try {
    const status = migrationSniper.getStatus();
    res.json({ success: true, data: status });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to get status' });
  }
});

router.post('/start', async (req: Request, res: Response) => {
  try {
    await migrationSniper.start();
    res.json({ success: true, message: 'Migration sniper started' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to start sniper' });
  }
});

router.post('/stop', (req: Request, res: Response) => {
  try {
    migrationSniper.stop();
    res.json({ success: true, message: 'Migration sniper stopped' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to stop sniper' });
  }
});

router.get('/snipes', (req: Request, res: Response) => {
  try {
    const snipes = migrationSniper.getSnipeHistory();
    res.json({ success: true, data: snipes });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to get snipes' });
  }
});

export { router as sniperRoutes };

