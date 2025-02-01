'use client';

import { useEffect, useRef, useState } from 'react';
import * as ChartJS from 'chart.js';
// import ZoomPlugin from 'chartjs-plugin-zoom';
import { RefreshCcwDotIcon } from 'lucide-react';

type Props = {
    data: {
        temperatures: { value: number; time: Date }[];
        humidities: { value: number; time: Date }[];
    };
    chartColor?: string;
};
export default function Chart(props: Props) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [chart, setChart] = useState<ChartJS.Chart<
        'line',
        number[],
        string
    > | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;
        ChartJS.Chart.register(
            ChartJS.LineController,
            ChartJS.CategoryScale,
            ChartJS.LinearScale,
            ChartJS.PointElement,
            ChartJS.LineElement,
            // ZoomPlugin
        );
        const c = new ChartJS.Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: props.data.temperatures.map((d) =>
                    d.time.toLocaleTimeString()
                ),
                datasets: [
                    {
                        label: 'Temperature',
                        data: props.data.temperatures.map((d) => d.value),
                        borderColor: props.chartColor || 'yellow',
                        fill: false,
                        pointRadius: 0,
                    },
                    {
                        label: 'Humidity',
                        data: props.data.humidities.map((d) => d.value),
                        borderColor: props.chartColor || 'blue',
                        fill: false,
                        pointRadius: 0,
                    },
                ],
            },
            options: {
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                maintainAspectRatio: true,
                scales: {
                    x: {
                        type: 'category',
                        labels: props.data.temperatures.map((d) =>
                            d.time.toLocaleTimeString()
                        ),
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 12,
                        },
                    },
                },
                elements: {
                    line: {
                        tension: 0.4,
                    },
                },
                hover: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        enabled: true,
                        intersect: false,
                    },
                    // zoom: {
                    //     zoom: {
                    //         wheel: {
                    //             enabled: true,
                    //         },
                    //         pinch: {
                    //             enabled: true,
                    //         },
                    //         drag: {
                    //             enabled: true,
                    //         },
                    //         mode: 'xy',
                    //     },
                    // },
                },
            },
        });
        setChart(c);
        return () => {
            c.destroy();
        };
    }, [chartRef]);

    // return false;

    return (
        <>
            <canvas className="w-full" ref={chartRef} />
            {/* <RefreshCcwDotIcon
                size={16}
                className="stroke-slate-500"
                onClick={() =>{}
                    // (chart as unknown as ChartJS.Chart)?.resetZoom?.()
                }
            /> */}
        </>
    );
}
