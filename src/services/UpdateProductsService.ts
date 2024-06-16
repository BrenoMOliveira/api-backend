import prismaClient from "../prisma";

class UpdateProductsService{
    async execute(id: string, data: { name?: string; description?: string; price?: number; color?: string; stock?: number; }) {
        const updatedProduct = await prismaClient.products.update({
            where: { id },
            data
        });

        return updatedProduct;
    }
}

export {UpdateProductsService}