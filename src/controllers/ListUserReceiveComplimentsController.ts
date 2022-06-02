import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiverComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(
      user_id
    );

    return response.status(200).json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
