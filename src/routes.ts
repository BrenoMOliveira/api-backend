import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateProductsControllers } from "./controllers/CreateProdutsControllers";
import { ListProductsControllers } from "./controllers/ListProductsControllers";
import { DeleteProductsController } from "./controllers/DeleteProductsControllers";
import { ListProductsIdControllers } from "./controllers/ListProductsIdControllers";
import { UpdateProductsControllers } from "./controllers/UpdateProductsControllers";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/createProducts", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductsControllers().handle(request, reply)
    })

    fastify.get("/allProducts", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsControllers().handle(request, reply)
    })

    fastify.delete("/deleteProducts", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductsController().handle(request, reply)
    })

    fastify.post("/updateProducts", async(request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductsControllers().handle(request, reply)
    })

    fastify.get("/listIdProducts", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsIdControllers().handle(request, reply)
    })
}