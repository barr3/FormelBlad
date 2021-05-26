"use strict";

var a;
var m;
var E;
var F;
var v;
var t;
var s;
const c = 299792458;
const g = 9.82;
const G = 6.673e-11;
var m1;
var m2;
var r;
var mu;
var Ff;
var FN;
var W;
var h;
var P;
var Pn;
var Pt;
var eta;
var p;




let formulas = [];

class Formula {
    constructor(formula, vars, blockId) {
	
	this.formula = formula;
	this.vars = vars; //variables used in formula. I.E ["E", "m"] in E=mcÂ²
	this.blockId = blockId; //id of the dom-object containing the formula

	this.ids = [];
	
	this.obj = [];

	this.notvars = [];



	
	// console.log(document.getElementById(this.blockId).childNodes[9].childNodes[1].id);


	

	for (var z = 0; z < formula.length; z++) {
	    this.formula[z] = this.formula[z].replace(/\s/g, "");  // removes spaces from formula
	}


	

	this.numOfVars = vars.length;

    }

    assignIds(){ //assigns ids to the objects
		
	//Takes all ids and inserts the corresponding DOM-object in the obj array.
	this.numOfIds = document.getElementById(this.blockId).childNodes[9].childNodes.length;
	// this.numOfIds = Math.floor(this.numOfIds/2);
	var tempIndex = 0;
	for (var i = 0; i < this.numOfIds; i++) {

	    var temp = document.getElementById(this.blockId).childNodes[9].childNodes[i].id;	    
	    if (temp != undefined) {
		this.ids[tempIndex] = temp;
		this.obj.push(document.getElementById(this.ids[tempIndex]));
		tempIndex++;
	    }

	}
	
    }

    //Returns all the variables that are not selected by the user
    getOtherVars(e){
	var index = 0;
	
	for (var i = 0; i < this.vars.length; i++) {
	    
	    if (this.vars[i] != e) {
		this.notvars[index] = this.vars[i];
		index++;
	    }
	    
	}


    }

    
    formulaLatex(input,variable){

	// this.getOtherVars(variable);

	
	var leftSide;
	var rightSide;


	for (var i = 0; i < this.formula.length; i++) {
	    leftSide = this.formula[i].split("=")[0];
	    rightSide = this.formula[i].split("=")[1];

	    if (leftSide == variable) {
		break;
	    }
	    
	}
	

	for (var p = 0; p < this.notvars.length; p++) {
	    eval(this.notvars[p] + "= input.split(';')[p]");
	}

	
	console.log(rightSide);
	var result = eval(rightSide);
	console.log(result);
	
	var test = document.getElementById(this.blockId); 
	
	test.insertAdjacentHTML("beforeend", `<div id='result'>  <p class="latex"> ${leftSide} = ${result} </p>    </div>`);

    }

    //Detects what unknown variable is pressed and inserts a textbox to get user input. 
    getInput(variable){
	// console.this.selectedId);
	// console.log(document.getElementById(this.selectedId).parentElement.parentElement);

	var main = document.getElementById(this.selectedId).parentElement.parentElement;
	
	
	if (clickable == false) {

	    var tempId = JSON.stringify(this.ids);
	    var tempObj = JSON.stringify(this);
	    var varString = JSON.stringify(variable);

	    this.getOtherVars(variable);
	    
	    var placeholder;

	    for (var i = 0; i < this.notvars.length; i++) {
		
		if (i == 0) {
		    placeholder = "Vänligen skriv in: " + this.notvars[i];
		    
		} else {		 
		    placeholder += ", " + this.notvars[i];
		}
	    }

	    placeholder += '. Separera värdena med ett ";"';
	    

	    
	    main.insertAdjacentHTML("beforeend", `<div id='temp'>  <input type='text' placeholder='${placeholder}'  class='tempinput' id='tempinput' name='formula'><button class='tempbutton' onclick='removeField(${tempId}, ${tempObj}, ${varString})'>Lös för ${variable} </button> </div>`);

	} 
    }

}


//================================================================================================================


formulas.push(new Formula(["E = m * c **2", "m = E/(c^2)"], ["E", "m"], 1));
formulas.push(new Formula(["F = m * a", "m = F/a", "a = F/m"], ["F", "m", "a"], 2));
formulas.push(new Formula(["v = s/t", "s = v * t", "t = s/v"], ["v", "s", "t"], 3   ));
formulas.push(new Formula(["a = v/t", "v = a * t", "t = a/v"], ["a", "v", "t"],  4  ));
formulas.push(new Formula(["F = G * (m1 * m2 / (r**2))", "m1 = F * r**2/(G * m2)",
			   "m2 = F * r**2/(G * m1)", "r = Math.sqrt(G * (m1 * m2 / (F)))"],
			  ["F", "m1", "m2", "r"], 6))		 			  
formulas.push(new Formula(["F = m * g", "m = F/g"], ["F", "m"], 7));
formulas.push(new Formula(["Ff = mu * FN", "mu = Ff / FN", "FN = Ff / mu"], ["Ff","mu", "FN"], 8 ));
formulas.push(new Formula(["W = F * s", "F = W/s","s=W/F"], ["W","F","s"], "arbete"));
formulas.push(new Formula(["E = m*g*h", "m = E/(g*h)", "h = E/(m*g)"], ["E","m","h"], "potentiell"));
formulas.push(new Formula(["E = (m* v**2) / (2)", "m = (2*E) / (v**2)"], ["E","m","v"], "kinetisk"));
formulas.push(new Formula(["P = W/t", "W = P*t", "t = W/t"], ["P","W","t"], "effekt"));
formulas.push(new Formula(["eta = Pn/Pt", "Pn = eta * Pt", "Pt = Pn/eta"], ["eta", "Pn", "Pt"], "verkningsgrad"));
formulas.push(new Formula(["p = m*v", "m = p/v", "v = p/m"], ["p", "m", "v"], "rörelsemängd"));
formulas.push(new Formula(["I = F * t", "F = I/t", "t = I/F"], ["I","F","t"], "impuls"));

//================================================================================================================



function romanize (num) {  //converts arabic numerals to roman numerals
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

var buttons = document.getElementsByClassName("helper");


for(var i = 0; i < buttons.length; i++) {
    buttons[i].id = romanize(i+1);
}

var romanNumeral = 1;


//Sets the ids formulas correctly according to their corresponding buttons.
//This is pretty messy ngl
for (var i = 0; i < formulas.length; i++){

    for (var j = 0; j < buttons.length; j++){

	if (formulas[i].blockId == buttons[j].parentElement.parentElement.id){

	    for (var k = 0; k < buttons[j].parentElement.children.length; k++){	   

		for (var l = 0; l < formulas[i].vars.length; l++){
		    formulas[i].ids[l] = buttons[j].parentElement.children[l].id;
		    formulas[i].assignIds();
		}
		
	    }
	    
	}
	
    }
    
}





var clickable = true;

function unknown(obj){  //Gets called when an obj get clicked on the site


    if (clickable == true) {
	clickable = false;
	

	
	obj.classList.add("toggle");
	var variable = obj.children[0].className;
	

	pairObjects(obj).getInput(variable);

	
    } else {
	obj.classList.remove("toggle");
	document.getElementById("temp").remove();
	clickable = true;
    }
    
}

function removeField(itemId, obj, variable){ //Removes the temporary text input box.
    clickable = true;
    
    for (var i = 0; i < itemId.length; i++) {
	document.getElementById(itemId[i]).classList.remove("toggle");
    }

    var input = document.getElementById("tempinput").value; 

    document.getElementById("temp").remove();

    var clickedObject;
    for (var r = 0; r < formulas.length; r++) {

	if (obj.ids[0] == formulas[r].ids[0]) {

	    clickedObject = formulas[r];
	}
	
    }

    if (document.getElementById("result") != null) { //Removes the result when printing another result
	document.getElementById("result").remove(); 	
    }

    clickedObject.formulaLatex(input, variable);
    
}

function pairObjects(obj) { //Takes an html-object and returns the corresponding js-object

    var jsObject;
    for (var i = 0; i < formulas.length; i++) {

	for (var j = 0; j < formulas[i].obj.length; j++) {

	    
	    if (formulas[i].obj[j] == obj) {
		jsObject = formulas[i];
		jsObject.selectedId = jsObject.obj[j].id;

	    }
		
	}
	    
    }

    return jsObject;
    
}


//Allows for folding in the text
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
	// this.classList.toggle("active");
	var content = this.nextElementSibling;
	content.classList.toggle("active");
    });
}
