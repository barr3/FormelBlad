"use strict" 

const LOCAL_STORAGE_KEY_BAFB = "app.mode"

let mode = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BAFB)) || [];

console.log(mode);

if (mode == "dark"){
    enableDark();
} else {
    enableLight();
} 


function enableDark() { 

    document.body.style.backgroundColor = "	#151521";
    var h1Elements = document.getElementsByTagName("h1");
    var h2Elements = document.getElementsByTagName("h2");
    var aElements = document.getElementsByTagName("a");
    // let boxFysik = document.getElementById("fysik-ämne");
    // let box = document.getElementById("matte-ämne");
    let outline = document.getElementsByClassName("outline");

    for (var i = 0; i < outline.length; i++) {
	outline[i].style.borderColor = "#626294";
    }
    let border = document.getElementsByClassName("ämne");    
    for (var i = 0; i < border.length; i++) {
	border[i].style.borderColor = "#626294";
    }
    
    let box = document.getElementsByClassName("content");
    for (var i = 0; i < box.length; i++) {
	box[i].style.borderColor = "#626294";
	box[i].style.backgroundColor ="#1b1b2e";
    }
    
    let faq = document.getElementById("faqId");
    faq.style.backgroundColor = "#1f1f30";

    try {
    
	let picMatte = document.getElementById("mattePic");
	let picFysik = document.getElementById("fysikPic");
	picMatte.style.filter = "invert(100%)"
	picFysik.style.filter = "invert(100%)"
    } catch {
	
    }

    console.log(outline);
    // outline.style.borderColor = "#626294"
    // box.style.borderColor = "#626294"
    // box.style.backgroundColor ="#1b1b2e";
    // boxFysik.style.borderColor = "#626294"
    // boxFysik.style.backgroundColor ="#1b1b2e";


    for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.backgroundColor = "#626294";
        aElements[i].style.color = "#FFF";
    }
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#fff";
    }
    for(var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = "#fff";
    }
    
    var pElements = document.getElementsByTagName("p");

    for(var i = 0; i < pElements.length; i++) {
        pElements[i].style.color = "#fff";
    }
    
    var h4Elements = document.getElementsByTagName("h4");

    for(var i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.color = "#fff";
    }

    var h3Elements = document.getElementsByTagName("h3");

    for(var i = 0; i < h3Elements.length; i++) {
        h3Elements[i].style.color = "#fff";
    }

    try {
	let Ã¤mne = document.getElementById

	
    } catch (err) {
	
    } 


    localStorage.setItem(LOCAL_STORAGE_KEY_BAFB, JSON.stringify("dark"));

    const cb = document.getElementById("check");
    if (cb.checked != true){
        enableLight();
    }

}   



function enableLight() {

    try {
    
	let picMatte = document.getElementById("mattePic");
	let picFysik = document.getElementById("fysikPic");
	picMatte.style.filter = "invert(0%)"
	picFysik.style.filter = "invert(0%)"
    } catch {
	
    }

    
    document.body.style.backgroundColor = "	#FFF";
    var h1Elements = document.getElementsByTagName("h1");
    var aElements = document.getElementsByTagName("a");

    let box = document.getElementsByClassName("content");
    for (var i = 0; i < box.length; i++) {
	box[i].style.backgroundColor ="#FFF";
	box[i].style.borderColor = "#000"
    }

    
    // let boxFysik = document.getElementById("fysik-Ã¤mne");
    // let box = document.getElementById("matte-Ã¤mne");
    let outline = document.getElementsByClassName("outline");
    for (var i = 0; i < outline.length; i++) {
	outline[i].style.borderColor = "#000";
    }


    let faq = document.getElementById("faqId");
    faq.style.backgroundColor = "#eee";

    // box.style.backgroundColor ="#FFF";
    // boxFysik.style.borderColor = "#000"
    // boxFysik.style.backgroundColor ="#FFF";
    // faq.style.backgroundColor = "#FFF";


    for(var i = 0; i < aElements.length; i++) {
        aElements[i].style.backgroundColor = "#f1f5fd";
        aElements[i].style.color = "#000";

    } 

    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#000";
    }

    var pElements = document.getElementsByTagName("p");

    for(var i = 0; i < pElements.length; i++) {
        pElements[i].style.color = "#000";
    }
    
    var h4Elements = document.getElementsByTagName("h4");

    for(var i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.color = "#000";
    }

    var h3Elements = document.getElementsByTagName("h3");

    for(var i = 0; i < h3Elements.length; i++) {
        h3Elements[i].style.color = "#000";
    }

    
    var h2Elements = document.getElementsByTagName("h2");
    for(var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = "#000";
    }    

    localStorage.setItem(LOCAL_STORAGE_KEY_BAFB, JSON.stringify("light"));
}   
