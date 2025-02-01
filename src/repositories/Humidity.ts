import { db, HumidityTable } from '@/db';
import { desc, eq } from 'drizzle-orm';

export async function getHumidityForDate(date: Date) {
    return db
        .select()
        .from(HumidityTable)
        .where(eq(HumidityTable.date, date.toISOString().split('T')[0]));
}

export async function insertHumidity(humidity: number, date = new Date()) {
    return db.insert(HumidityTable).values({
        percent: humidity,
        date: date.toISOString().split('T')[0],
        datetime: date,
    });
}

export async function getLatestHumidity() {
    const result = await db
        .select()
        .from(HumidityTable)
        .orderBy(desc(HumidityTable.datetime))
        .limit(1);
    return result[0];
}
