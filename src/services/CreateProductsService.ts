import prismaClient from "../prisma";

interface CreateProductsProps{
    name: string
    description: string
    color: string
    weight: number
    type: string
    price: number
}

class CreateProductsService{
    async execute({name, description, color, weight, type, price}: CreateProductsProps){

        const products = await prismaClient.products.create({
            data:{
                name,
                description,
                color,
                weight,
                type,
                price
            }
        })

        return products
    }
}

export {CreateProductsService}