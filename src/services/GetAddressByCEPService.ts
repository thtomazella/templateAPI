import axios from "axios";

interface IRequest{
  cep: string;
}


class GetAddressByCEPService {
  async execute({ cep }: IRequest) {
    try {
      const response = await axios.get(`https://apps.widenet.com.br/busca-cep/api/cep.html?code=${cep}`)

      return response.data;
    } catch (error) {
      throw new Error("CEP não encontrado!");
    }

  }
}

export { GetAddressByCEPService };
