import { insertSensorData } from '@/repositories/SensorData';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const apiKey = req.nextUrl.searchParams.get('api_key');
    if (apiKey !== process.env.WEBHOOK_API_KEY) {
        return NextResponse.json({ ok: false });
    }
    await insertSensorData({
        humidity: req.nextUrl.searchParams.get('humi') || '',
        temperature: req.nextUrl.searchParams.get('temperature') || '',
    });
    return NextResponse.json({ ok: true });
};
