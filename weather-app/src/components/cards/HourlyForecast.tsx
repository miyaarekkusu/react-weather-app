import React from "react";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";

type Props = {};

export default function HourlyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <Card
      title="時間別予報 (48時間)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
}
