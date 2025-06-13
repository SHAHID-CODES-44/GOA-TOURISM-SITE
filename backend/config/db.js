// config/db.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not defined!');
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
