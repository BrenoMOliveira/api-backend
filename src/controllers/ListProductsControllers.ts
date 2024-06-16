import { FastifyRequest, FastifyReply } from "fastify";
import {ListProductsService} from "../services/ListProductsService"

class ListProductsControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listProductsService = new ListProductsService();

        const customers = await listProductsService.execute();

        reply.send(customers);

    }
}

export {ListProductsControllers}