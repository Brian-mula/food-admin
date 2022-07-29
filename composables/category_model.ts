export class Category{
    name:string;
    image:string;
    constructor(name:string,image:string){
        this.name=name;
        this.image=image;
    }
}

export const categoryconverter={
    toFirestore:(category:Category)=>{
        return {
            name:category.name,
            image:category.image
        }
    },
    fromFirestore:(snapshot)=>{
        const data=snapshot.data()
        return new Category(data.name,data.image)
    }
}