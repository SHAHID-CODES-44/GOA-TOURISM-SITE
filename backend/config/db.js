import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Extract environment variables
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

// Optional: Debug logs to see if values are coming through
console.log("🧪 ENV CHECK:", {
  DB_USER,
  DB_PASSWORD: DB_PASSWORD ? '****' : undefined, // Hide password
  DB_HOST,
  DB_PORT,
  DB_NAME
});

// Check if all required env vars are set
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error('❌ One or more database environment variables are not defined!');
}

// Create Sequelize instance
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT), // Ensure port is a number
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

// Optional: Test DB connection
sequelize.authenticate()
  .then(() => {
    console.log(`✅ Connected to MySQL at ${DB_HOST}:${DB_PORT} | DB: ${DB_NAME}`);
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });

export default sequelize;
