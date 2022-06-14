import { Render } from "./common";
import { listNavs } from "./data";

const menu = document.querySelector('#menu');
const listNav = document.querySelector('.list-nav');


menu.addEventListener('click', () => {
    listNav.classList.toggle('hidden');
});



function showListNav(listNavs) {
    if (!Array.isArray(listNavs) || listNavs.length == 0) return;
    let result = "";
    for (let i = 0; i < listNavs.length; i++) {
        result += `
        <li class="min-w-[100px] text-center">
            <a href="${listNavs[i].href}" class="block py-4 text-xl text-black font-semibold hover:bg-[#3498db] hover:text-white">${listNavs[i].title}</a>
        </li>
        `;
    }
    return result;
}

Render(".list-nav", showListNav(listNavs));