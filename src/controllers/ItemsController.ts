import { Request, Response } from "express";
import knex from "../database/connection";
require("dotenv").config();


class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${process.env.UPLOADS_URL}/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
