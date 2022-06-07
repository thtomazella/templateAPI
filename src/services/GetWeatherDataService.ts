import axios from "axios";

interface IRequest{
  cidade: string;
}


class GetWeatherDataService {
  async execute({ cidade }: IRequest) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid={chave}&q=${cidade}&units=metric`)
      // https://openweathermap.org/
      return response.data;
    } catch (error) {
      throw new Error("Registro não encontrado!");
    }

  }
}

export { GetWeatherDataService };
