import axios from "axios";

interface IRequest{
  cidade: string;
}


class GetWeatherDataService {
  async execute({ cidade }: IRequest) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=59a516841f713d2d09e808851c08360d&q=${cidade}&units=metric`)

      return response.data;
    } catch (error) {
      throw new Error("Registro não encontrado!");
    }

  }
}

export { GetWeatherDataService };