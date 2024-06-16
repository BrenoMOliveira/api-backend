import { FastifyRequest, FastifyReply } from "fastify";
import {CreateProductsService} from '../services/CreateProductsService'

class CreateProductsControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, description, color, weight, type, price} = 
        request.body as {name: string, description: string, color: string, weight: number, type: string, price: number };

        const productsService = new CreateProductsService()
        const products = await productsService.execute({name, description, color, weight, type, price});

        reply.send(products)
    }
}

export {CreateProductsControllers}