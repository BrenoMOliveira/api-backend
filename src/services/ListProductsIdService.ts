import prismaClient from "../prisma";

class ListProductsIdService {
    async executeById(id: string) {
        return await prismaClient.products.findUnique({  // Confirme se é 'product'
            where: { id }
        });
    }

    async executeByName(name: string) {
        return await prismaClient.products.findFirst({  // Confirme se é 'product'
            where: { name }
        });
    }
}

export { ListProductsIdService };
