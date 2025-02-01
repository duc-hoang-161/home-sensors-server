import { index, int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const TemperatureTable = sqliteTable(
    'Temperature',
    {
        id: int().primaryKey({ autoIncrement: true }),
        fahrenheit: real().notNull(),
        date: text().notNull(),
        datetime: int({ mode: 'timestamp' }).notNull(),
    },
    (table) => {
        return {
            dateIdx: index('date_idx').on(table.date),
        };
    }
);

export const HumidityTable = sqliteTable(
    'Humidity',
    {
        id: int().primaryKey({ autoIncrement: true }),
        percent: real().notNull(),
        date: text().notNull(),
        datetime: int({ mode: 'timestamp' }).notNull(),
    },
    (table) => {
        return {
            dateIdx: index('date_idx').on(table.date),
        };
    }
);
