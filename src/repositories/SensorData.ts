import { revalidatePath, revalidateTag } from 'next/cache';
import { insertHumidity } from './Humidity';
import { insertTemperature } from './Temperature';

export async function insertSensorData(data: {
    humidity: string;
    temperature: string;
}) {
    const promises = [];

    if (!isNaN(Number(data.temperature))) {
        promises.push(insertTemperature(Number(data.temperature)));
    }
    if (!isNaN(Number(data.humidity))) {
        promises.push(insertHumidity(Number(data.humidity)));
    }

    await Promise.all(promises);
    revalidatePath('/', 'page');
}
