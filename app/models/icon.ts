interface Icon {
    name:string;
    color:string;
    size:number;
    onPress?:()=>void;  
    style?:{}
}

export default Icon;