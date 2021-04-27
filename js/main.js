"use strict";

var a;
var m;
var E;
var F;
var v;
var t;
var s;
const c = 299792458;



let formulas = [];

class Formula {
    constructor(formula, vars, blockId) {
	
	this.formula = formula;
	this.vars = vars; //variables used in formula. I.E ["E", "m"] in E=mc²
	this.blockId = blockId; //id of the dom-object containing the formula

	this.ids = [];
	
	this.obj = [];

	this.notvars = [];

	
	// console.log(document.getElementById(this.blockId).childNodes[9].childNodes[1].id);


	

	for (var z = 0; z < formula.length; z++) {
	    this.formula[z] = this.formula[z].replace(/\s/g, "");  // removes spaces from formula
	}

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
	
	this.numOfVars = vars.length;

    }

    //Returns all the variables that are not selected by the user
    getOtherVars(e){
	var index = 0;
	
	for (var i = 0; i < this.vars.length; i++) {
	    
	    if (this.vars[i] != e) {
		this.notvars[korv] = this.vars[i];
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
	
	
	
	var result = eval(rightSide);
	console.log(result);
	
	var test = document.getElementById(this.blockId); 
	
	test.insertAdjacentHTML("beforeend", `<div id='result'>  <p class="latex"> ${leftSide} = ${result} </p>    </div>`);

    }

    //Detects what unknown variable is pressed and inserts a textbox to get user input. 
    getInput(variable){
	console.log(this.selectedId);
	console.log(document.getElementById(this.selectedId).parentElement.parentElement);
	var main = document.getElementById(this.selectedId).parentElement.parentElement;

	
	if (clickable == false) {
	    console.log(this.ids);
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

//================================================================================================================

console.log(formulas);

var clickable = true;

function unknown(obj){  //Gets called when an obj get clicked on the site

    
    if (clickable == true) {
	clickable = false;

	console.log(obj);
	
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
		console.log(jsObject);
	    }
		
	}
	    
    }

    return jsObject;
    
}
