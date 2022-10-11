export interface Book{
    title:string;
    authors?:[];
    description?:string;
    genere?:string;
    isTrending?:boolean;
    language?:string;
    imageUrl?:string;
    price?:number;
}

export default Book;