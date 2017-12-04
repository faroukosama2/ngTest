import { Ingredient } from "./ingredient.model";



export class Recipe
{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients:Ingredient[];
    constructor();
    constructor(nm: string , desc: string ,imgPath: string, ingredients:Ingredient[],recipe?:Recipe)
    {
        if(nm)
        {
        this.name=nm;
        this.description=desc;
        this.imagePath=imgPath;
        this.ingredients=ingredients;
        }else
        {
            
        }
    }
    
}