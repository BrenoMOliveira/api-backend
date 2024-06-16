import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateProductsService } from "../services/UpdateProductsService";

interface UpdateProductRequest extends FastifyRequest {
    Params: {
        id: string;
    };
    Body: {
        name?: string; 
        description?: string; 
        price?: number; 
        color?: string; 
        stock?: number;
    };
}

class UpdateProductsControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const productsService = new UpdateProductsService();
        const {id} = request.query as {id: string}
        const data = request.body;

        //const products = await productsService.execute({id, data})

        //reply.send(products)
    }
}


export { UpdateProductsControllers };
