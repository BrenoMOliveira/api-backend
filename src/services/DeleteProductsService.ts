import prismaClient from "../prisma";

interface DeleteProcuctsProps{
    id: string;
}

class DeleteProcuctsService{
    async execute({id}: DeleteProcuctsProps){
        const findProduct = await prismaClient.products.findFirst({
            where: {
                id: id
            }
        })
    
        if(!findProduct){
            throw new Error("Produto não existe.")
        }
        
        await prismaClient.products.delete({
            where:{
                id: findProduct.id
            }
        })

        return{ message: "Deletado com sucesso." }
    }
}

export {DeleteProcuctsService}