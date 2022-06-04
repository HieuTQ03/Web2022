import { Render } from "./common";
import { listProduct, listMenu, categories } from "./data";


function showProduct(listProduct) {
    if (!Array.isArray(listProduct) || listProduct.length == 0) return;

    let result = '';
    for (let i = 0; i < listProduct.length; i++) {
        result += `
        <div class="product-item mb-14" onclick="redirectIndex(this)" href="${listProduct[i].href}?id_d=${listProduct[i].id}">
            <img src="${listProduct[i].images}" alt="">
            <div class="my-6 font-semibold text-red-500 text-center md:text-left">${listProduct[i].title}</div>
            <div class="flex justify-center md:justify-start">
                <span class="mr-2">
                    <img src="${listProduct[i].timeSuccess}" alt="">
                </span>
                <span class="">
                    <img src="${listProduct[i].type}" alt="">
                </span>
            </div>
        </div>
        `
    }
    return result;
}

function redirectIndex(params) {
    if (!params) return;
    let url = params.attributes.href.nodeValue;
    location.href = url;
}

function showListMenu(listMenu) {
    if (!Array.isArray(listMenu) || listMenu.length == 0) return;

    let result = "";
    for (let i = 0; i < listMenu.length; i++) {
        result += `
        <li class="cursor-pointer text-white hover:bg-[#3498db] sm:hover:bg-white sm:text-black">
            <a class="p-4 sm:font-bold block" href="${listMenu[i].href}">${listMenu[i].title}</a>
        </li>
        `
    }
    return result;
}

function showCategory(categories) {
    if (!Array.isArray(categories) || categories.length == 0) return;

    let result = "";
    for (let i = 0; i < categories.length; i++) {
        result += `
        <div class="text-center object-cover font-semibold">
            <img src="${categories[i].images}" class="ml-[15%] mb-[12px]" alt="">
            <span>${categories[i].title}</span>
        </div>
        `
    }
    return result;
}

Render('.nav-list', showListMenu(listMenu));
Render('.product-list_show', showProduct(listProduct));
Render('.list-category', showCategory(categories));