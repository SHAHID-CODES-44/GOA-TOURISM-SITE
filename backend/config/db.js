import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // Load env variables

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('❌ DATABASE_URL is not defined!');
}

const sequelize = new Sequelize(dbUrl, {
  dialect: 'mysql',
});

export default sequelize;
