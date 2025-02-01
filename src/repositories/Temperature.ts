import { db, TemperatureTable } from '@/db';
import { desc, eq } from 'drizzle-orm';

export async function getTemperatureForDate(date: Date) {
    return db
        .select()
        .from(TemperatureTable)
        .where(eq(TemperatureTable.date, date.toISOString().split('T')[0]));
}

export async function insertTemperature(fahrenheit: number, date = new Date()) {
    return db.insert(TemperatureTable).values({
        fahrenheit,
        date: date.toISOString().split('T')[0],
        datetime: date,
    });
}

export async function getLatestTemperature() {
    const result = await db
        .select()
        .from(TemperatureTable)
        .orderBy(desc(TemperatureTable.datetime))
        .limit(1);

    return result[0] ?? null;
}
