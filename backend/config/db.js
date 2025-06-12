import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error('❌ One or more database environment variables are not defined!');
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT, // ✅ must be added!
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    connectTimeout: 10000, // optional
  },
});

console.log(`🔍 Connecting to MySQL at ${DB_HOST}:${DB_PORT}, DB: ${DB_NAME}`);

export default sequelize;
