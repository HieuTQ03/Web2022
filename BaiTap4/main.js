import { render } from "./common";
import{categories,productList } from "./data";
function showData(data,key){
    if(!Array.isArray(data)|| data.length==0) return false;

    let result ="";
    if(key =="product"){
        {
            for(let i=0;i<data.length;i++){
                result+=<h2><a href="./detail.html?id=${data[i].id}">${data[i].name}</a></h2>
            }
        }
    }
    return result;
}
render("product", showData(productList, "product"));
render("category", showData(categories, "category"));