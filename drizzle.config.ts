import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/SensorData.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DB_FILE_NAME!,
    },
});
