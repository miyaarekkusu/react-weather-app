import Card from "./Card";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <Card title="日別予報" childrenClassName="flex flex-col gap-4">
      {data.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-10 text-center">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <WeatherIcon src={day.weather[0].icon} />
          <p>{Math.round(day.temp.day)}°C</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
        </div>
      ))}
      {JSON.stringify(data?.daily)?.slice(0, 100)}
    </Card>
  );
}
