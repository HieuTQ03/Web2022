export function render (idELement,content){
    if(idELement){
        document.getElementById(idELement).innerHTML=content
    }
}