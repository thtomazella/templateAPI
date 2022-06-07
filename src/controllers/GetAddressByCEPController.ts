import { Request, Response } from "express";
import { GetAddressByCEPService } from "../services/GetAddressByCEPService";

class GetAddressByCEPController {
  async handle(request: Request, response: Response) {
    const { cep } = request.params;

    const getAddressByCEPService = new GetAddressByCEPService();

    const address = await getAddressByCEPService.execute({
      cep
    });

    return response.status(200).json(address);
  }
}

export { GetAddressByCEPController };
