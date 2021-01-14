import {recettesData} from '../Recipes'

export default function GetData(path){
    const parts = path.split("/")
    const cocktail = parts[parts.length-1].replace("%20", " ")
    const recettesJsON = JSON.stringify(recettesData.recipes);
    const recipes = JSON.parse(recettesJsON);
    const data = recipes[cocktail]
    return {name : cocktail, ingredients: data["ingredients"], desc: data["desc"], steps: data["steps"]}
}