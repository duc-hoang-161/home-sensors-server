import Chart from '@/components/Chart';
import { getHumidityForDate, getLatestHumidity } from '@/repositories/Humidity';
import {
    getLatestTemperature,
    getTemperatureForDate,
} from '@/repositories/Temperature';
import { Dot, Droplet, ThermometerSun } from 'lucide-react';

export default async function Home() {
    const [latestTemperature, latestHumidity, temperatures, humidities] =
        await Promise.all([
            getLatestTemperature(),
            getLatestHumidity(),
            getTemperatureForDate(new Date()),
            getHumidityForDate(new Date()),
        ]);

    return (
        <div className="flex flex-col items-center gap-5 mx-3">
            <div className="max-w-screen-md border mx-auto m-5 rounded-xl bg-white bg-opacity-50 backdrop-blur-xl min-w-fit md:w-1/3 w-2/3">
                <div className="flex md:flex-row flex-col justify-between items-center flex-wrap px-2">
                    <p className="flex gap-0 items-center justify-start">
                        <Dot
                            className="stroke-red-500 animate-ping"
                            size={40}
                        />
                        <span className="text-xs capitalize font-bold">
                            Live
                        </span>
                    </p>
                    <div className="text-xs font-thin">
                        Updated at {latestTemperature.datetime.toLocaleString()}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 p-5 max-w-lg w-full mx-auto">
                    <div className="flex flex-col gap-3 justify-center items-center flex-1 group">
                        <ThermometerSun
                            size={50}
                            className="stroke-yellow-300 group-hover:stroke-yellow-500 transition-all duration-500"
                        />
                        {latestTemperature ? (
                            <p className="text-xl flex flex-col gap-1 items-center justify-center font-bold">
                                {latestTemperature.fahrenheit}°F
                            </p>
                        ) : (
                            <p>Unavailable</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center flex-1 group">
                        <Droplet
                            size={50}
                            className="stroke-blue-400 group-hover:stroke-blue-700 transition-all duration-500"
                        />
                        {latestHumidity ? (
                            <p className="text-xl flex flex-col gap-1 items-center justify-center font-bold">
                                {latestHumidity.percent}%
                            </p>
                        ) : (
                            <p>Unavailable</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="max-w-screen-md border mx-auto rounded-xl bg-white bg-opacity-50 backdrop-blur-xl overflow-x-auto w-full p-3">
                <p className="text-black font-thin">Today History</p>
                <Chart
                    data={{
                        temperatures: temperatures.map((t) => ({
                            value: t.fahrenheit,
                            time: t.datetime,
                        })),
                        humidities: humidities.map((h) => ({
                            value: h.percent,
                            time: h.datetime,
                        })),
                    }}
                />
            </div>
        </div>
    );
}
