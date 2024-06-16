import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteProcuctsService } from '../services/DeleteProductsService'


class DeleteProductsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const productsService = new DeleteProcuctsService();
        const {id} = request.query as {id: string}

        const products = await productsService.execute({id})

        reply.send(products)
    }
}

export {DeleteProductsController}