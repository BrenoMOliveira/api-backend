import prismaClient from "../prisma";

class ListProductsService {
    async executeById(id: string) {
        const product = await prismaClient.products.findUnique({
            where: {
                id: id
            }
        });

        return product;
    }

    async executeByName(name: string) {
        const product = await prismaClient.products.findFirst({
            where: {
                name: name
            }
        });

        return product;
    }
}

export { ListProductsService };
