import dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: parseInt(process.env.PORT || '3007', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
  },
  solana: {
    rpcUrl: process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
    privateKey: process.env.SOLANA_PRIVATE_KEY || '',
    publicKey: process.env.SOLANA_PUBLIC_KEY || '',
  },
  sniper: {
    enabled: process.env.SNIPER_ENABLED === 'true',
    bondingCurveThreshold: parseFloat(process.env.BONDING_CURVE_THRESHOLD || '0.98'),
    maxSlippage: parseFloat(process.env.MAX_SLIPPAGE || '5'),
    maxPositionSize: parseFloat(process.env.MAX_POSITION_SIZE || '0.5'),
    autoSellEnabled: process.env.AUTO_SELL_ENABLED === 'true',
    priorityFee: parseFloat(process.env.PRIORITY_FEE || '0.0001'),
    maxRetries: parseInt(process.env.MAX_RETRIES || '3', 10),
    transactionTimeout: parseInt(process.env.TRANSACTION_TIMEOUT || '30000', 10),
    privateRpcRequired: process.env.PRIVATE_RPC_REQUIRED === 'true',
    minLiquidity: parseFloat(process.env.MIN_LIQUIDITY || '1.0'),
    blacklistTokens: process.env.BLACKLIST_TOKENS?.split(',').filter(Boolean) || [],
    whitelistTokens: process.env.WHITELIST_TOKENS?.split(',').filter(Boolean) || [],
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/migration-sniper.log',
  },
};

