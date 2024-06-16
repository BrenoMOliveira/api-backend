import { FastifyRequest, FastifyReply } from "fastify"
import { ListProductsIdService } from "../services/ListProductsIdService"

class ListProductsIdControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const productsService = new ListProductsIdService();
        const { id, name } = request.query as { id?: string; name?: string };

            let product;
            if (id) {
                product = await productsService.executeById(id);
            } else if (name) {
                product = await productsService.executeByName(name);
            } 

            if (product) {
                reply.send(product);
            } 
    }
}

export {ListProductsIdControllers}
