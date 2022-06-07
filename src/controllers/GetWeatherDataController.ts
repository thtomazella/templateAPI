import { Request, Response } from "express";
import { GetWeatherDataService } from "../services/GetWeatherDataService";

class GetWeatherDataController {
  async handle(request: Request, response: Response) {
    const { cidade } = request.params;
    
    // instancia a classe service
    const getWeatherDataService = new GetWeatherDataService();

    const weather = await getWeatherDataService.execute({
      cidade
    });

    return response.status(200).json(weather);
  }
}

export { GetWeatherDataController };
