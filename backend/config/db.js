import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME) {
  throw new Error('❌ One or more database environment variables are not defined!');
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: console.log,  // or false to disable query logs
});

console.log(`🔍 Connected to MySQL at ${DB_HOST}, database: ${DB_NAME}`);

export default sequelize;
