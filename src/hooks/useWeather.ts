import axios from "axios";
import { SearchType } from "../types";
import { z } from "zod";
// import { object, string, number, InferOutput, parse } from "valibot";

//zod
// const Weather = z.object({
//     name: z.string(),
//     main: z.object({
//         temp: z.number(),
//         temp_min: z.number(),
//         temp_max: z.number()
//     })
// })
//type Weather = z.infer<typeof Weather>

//valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_min: number(),
//         temp_max: number()
//     })
// })

// type Weather = InferOutput<typeof WeatherSchema>


export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY
        try {

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            const { data } = await axios.get(geoUrl)
            const { lat, lon } = data[0]

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: weatherResult } = await axios.get(weatherUrl)

            //ZOD
            // const result = Weather.safeParse(weatherResult)
            // if(result.success) {
            //     console.log(result.data.name);
            // }

            //VALIBOT
            // const result = parse(WeatherSchema, weatherResult)
            // if (result) {
            //     console.log(result.name);
            // }else{
            //     throw new Error("No se pudo obtener el clima");  
            // }
            
        } catch (error) {
            console.error(error);

        }
    }

    return {
        fetchWeather
    }
}