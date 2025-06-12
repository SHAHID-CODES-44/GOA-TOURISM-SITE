import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Extract env variables
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

// Debug log (hide password)
console.log("🧪 ENV CHECK:", {
  DB_USER,
  DB_PASSWORD: DB_PASSWORD ? '****' : undefined,
  DB_HOST,
  DB_PORT,
  DB_NAME
});

// Check if all required env vars are set
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error('❌ One or more database environment variables are not defined!');
}

// Initialize Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

// Optional: Test connection
sequelize.authenticate()
  .then(() => {
    console.log(`✅ Connected to MySQL at ${DB_HOST}:${DB_PORT} | DB: ${DB_NAME}`);
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });

export default sequelize;
