import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

// 👉 Add this line
console.log("🔍 DATABASE_URL used:", databaseUrl);

if (!databaseUrl) {
  throw new Error('❌ DATABASE_URL is not defined!');
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
