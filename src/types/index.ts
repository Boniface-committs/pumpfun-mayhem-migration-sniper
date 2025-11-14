export interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
  bondingCurveProgress: number;
  migrationReady: boolean;
  liquidity: number;
  timestamp: number;
}

export interface SnipeResult {
  success: boolean;
  tokenAddress: string;
  txHash?: string;
  amount: number;
  price: number;
  timestamp: number;
  error?: string;
}

export interface BotStatus {
  isRunning: boolean;
  tokensSniped: number;
  successfulSnipes: number;
  failedSnipes: number;
  startTime: number;
}

