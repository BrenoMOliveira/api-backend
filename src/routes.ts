import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateProductsControllers } from "./controllers/CreateProdutsControllers";
import { ListProductsControllers } from "./controllers/ListProductsControllers";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductsControllers().handle(request, reply)
    })

    fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsControllers().handle(request, reply)
    })
}