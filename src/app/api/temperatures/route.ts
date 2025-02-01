import { getTemperatureForDate } from '@/repositories/Temperature';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const querySchema = z.object({
    date: z.preprocess((v) => new Date(v as string), z.date()),
    apiKey: z.string(),
});

export const GET = async (req: NextRequest) => {
    const apiKey = req.nextUrl.searchParams.get('api_key');
    if (apiKey !== process.env.WEBHOOK_API_KEY) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const query = querySchema.parse({
        date: req.nextUrl.searchParams.get('date'),
        apiKey: req.nextUrl.searchParams.get('api_key'),
    });

    const temperatures = await getTemperatureForDate(query.date);
    return NextResponse.json(temperatures);
};
