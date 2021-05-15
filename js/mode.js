"use strict";

const LOCAL_STORAGE_KEY_BAFB = "app.mode";

let mode = localStorage.getItem(LOCAL_STORAGE_KEY_BAFB);

var outlineColorDark = "#626294";
var backgroundColorDark = "#151521";
var accentColorDark = "#1f1f30";
var textColorDark = "white";

var outlineColorLight = "#000";
var backgroundColorLight = "#fff";
var accentColorLight = "#eee";
var textColorLight = "black";

let root = document.documentElement;


if (mode == '"dark"'){
    document.getElementById("check").classList.add("slider");
    document.getElementById("check").checked = true;
    enableDark();
} else if (mode == '"light"'){
    enableLight();
} 

function toggleMode() {
    if (mode == '"light"') {
	enableDark();
	mode = '"dark"';
    } else if (mode == '"dark"') {
	enableLight();
	mode = '"light"';
    } else {
	console.log("error");
	enableLight();
	mode = '"light"';
    }
}


function enableDark() { 
    document.body.style.backgroundColor = backgroundColorDark;
    var h1Elements = document.getElementsByTagName("h1");
    var h2Elements = document.getElementsByTagName("h2");
    var aElements = document.getElementsByTagName("a");
    // let boxFysik = document.getElementById("fysik-ämne");
    // let box = document.getElementById("matte-ämne");
    let outline = document.getElementsByClassName("outline");
    for (var i = 0; i < outline.length; i++) {
	outline[i].style.borderColor = outlineColorDark;
    }
    
    let border = document.getElementsByClassName("sub");
    for (var i = 0; i < border.length; i++) {
	border[i].style.borderColor = outlineColorDark;	
    }

    let section = document.getElementsByClassName("section");
    for (var i = 0; i < section.length; i++) {
	section[i].style.borderColor = outlineColorDark;
    }

    let formula = document.getElementsByClassName("formula");
    for (var i = 0; i < formula.length; i++) {
	formula[i].style.borderColor = outlineColorDark;
    }

    let helper = document.getElementsByClassName("helper");
    console.log(helper);
    for (var i = 0; i < helper.length; i++) {
	helper[i].style.setProperty("--color", outlineColorDark);
    }
    
    let content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
	content[i].style.borderColor = outlineColorDark;
	content[i].style.backgroundColor = backgroundColorDark;
    }

    try {
    let faq = document.getElementById("faqId");
    faq.style.backgroundColor = accentColorDark;
    }
    catch (err) {}
    
    try {    
	let picMatte = document.getElementById("mattePic");
	let picFysik = document.getElementById("fysikPic");
	picMatte.style.filter = "invert(100%)";
	picFysik.style.filter = "invert(100%)";
    } catch (err) {}

    // outline.style.borderColor = "#626294"
    // box.style.borderColor = "#626294"
    // box.style.backgroundColor ="#1b1b2e";
    // boxFysik.style.borderColor = "#626294"
    // boxFysik.style.backgroundColor ="#1b1b2e";


    for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.backgroundColor = backgroundColorDark;
        aElements[i].style.color = textColorDark;
	aElements[i].style.borderColor = outlineColorDark;
    }
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = textColorDark;
    }
    for(var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = textColorDark;
    }
    
    var pElements = document.getElementsByTagName("p");

    for(var i = 0; i < pElements.length; i++) {
        pElements[i].style.color = textColorDark;
    }
    
    var h4Elements = document.getElementsByTagName("h4");

    for(var i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.color = textColorDark;
    }

    var h3Elements = document.getElementsByTagName("h3");

    for(var i = 0; i < h3Elements.length; i++) {
        h3Elements[i].style.color = textColorDark;
    }

    
    
    document.documentElement.style.setProperty("--button-color", accentColorDark);
    document.documentElement.style.setProperty("--button-border", outlineColorDark);
    document.documentElement.style.setProperty("--button-text", textColorDark);

    localStorage.setItem(LOCAL_STORAGE_KEY_BAFB, JSON.stringify("dark"));


}   



function enableLight() {

    try {    
	let picMatte = document.getElementById("mattePic");
	let picFysik = document.getElementById("fysikPic");
	picMatte.style.filter = "invert(0%)";
	picFysik.style.filter = "invert(0%)";
    } catch (err) {}

    
    document.body.style.backgroundColor = backgroundColorLight;



    let box = document.getElementsByClassName("content");
    for (var i = 0; i < box.length; i++) {
	box[i].style.backgroundColor = backgroundColorLight;
	box[i].style.borderColor = outlineColorLight;
    }

    
    // let boxFysik = document.getElementById("fysik-Ã¤mne");
    // let box = document.getElementById("matte-Ã¤mne");
    let outline = document.getElementsByClassName("outline");
    for (var i = 0; i < outline.length; i++) {
	outline[i].style.borderColor = outlineColorLight;
    }

    try {
	let faq = document.getElementById("faqId");
	faq.style.backgroundColor = accentColorLight;
    } catch (err) {}



    var aElements = document.getElementsByTagName("a");
    for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.backgroundColor = backgroundColorLight;
        aElements[i].style.color = textColorLight;
    } 

    var h1Elements = document.getElementsByTagName("h1");
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = textColorLight;
    }

    var pElements = document.getElementsByTagName("p");
    for(var i = 0; i < pElements.length; i++) {
        pElements[i].style.color = textColorLight;
    }
    
    var h4Elements = document.getElementsByTagName("h4");
    for(var i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.color = textColorLight;
    }

    var h3Elements = document.getElementsByTagName("h3");
    for(var i = 0; i < h3Elements.length; i++) {
        h3Elements[i].style.color = textColorLight;
    }
    
    var h2Elements = document.getElementsByTagName("h2");
    for(var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = textColorLight;
    }

    let button = document.getElementsByTagName("button");
    for (var i = 0; i < button.length; i++) {
	button[i].style.backgroundColor = backgroundColorLight;
    }

    document.documentElement.style.setProperty("--button-color", accentColorLight);
    document.documentElement.style.setProperty("--button-border", outlineColorLight);
    document.documentElement.style.setProperty("--button-text", textColorLight);
    
    localStorage.setItem(LOCAL_STORAGE_KEY_BAFB, JSON.stringify("light"));

}   
