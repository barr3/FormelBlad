"use strict";

// function printMessage(message) {
//     let expression = "console.log(" + message + ")";
//     eval(expression);
// }

var a;
var m;
const c = 299792458;
// const message = "2**" + a;

// let expression = "console.log(" + message + ")";
// eval(expression);


let formulas = [];

class Formula {
    constructor(formula, explainaiton, vars, ids) {
	
	this.formula = formula;
	this.explaination = explainaiton;
	this.ids = ids;
	this.vars = vars;
	// this.selectedId; //not sure if unused
	this.obj = [];

	this.notvars = [];


	this.formula = formula.split("[\ ")[1].split(" \]")[0];
	this.formula = this.formula.replace(/\s/g, "");
	


	// for (var i = 0; i < this.formulaTest.length; i++) {
	//     console.log(this.formulaTest[i]);
	// }
	
	
	//Takes all ids and inserts the corresponding DOM-object in the obj array.
	for (var i = 0; i < this.ids.length; i++) { 
	    this.obj.push(document.getElementById(this.ids[i]));	    
	}
	
	this.numOfVars = vars.length;

    }

    //Returns all the variables that are not selected by the user
    //Not implemented yet.
    getOtherVars(e){

	var korv = 0;
	
	for (var i = 0; i < this.vars.length; i++) {
	    
	    if (this.vars[i] != e) {
		this.notvars[korv] = this.vars[i];
		korv++;
	    }
	    
	}


    }

    
    formulaLatex(input,variable){
	// for (var i = 0; i < this.vars.length; i++) {
	//     console.log(this.vars[i]);
	// }

	// console.log(content);
	// console.log(this.formulaTest);

	// var calc = new Calc(this.formulaTest);

	// var test = calc.eval(content);
	// console.log(test);

	// console.log(input);
	// console.log(formula);
	// console.log(variable);



	this.getOtherVars(variable);
	
	// getEquation(formula);


	var leftSide = this.formula.split("=")[0];
	var rightSide = this.formula.split("=")[1];

	// console.log(leftSide);
	// console.log(rightSide);
	
	let leftSideVariables = [];
	let rightSideVariables = [];

	for (var i = 0; i < leftSide.length; i++) {
	    leftSideVariables[i] = leftSide[i];	    
	}
	// console.log(leftSideVariables);
	
	for (var j = 0; j < rightSide.length; j++) {

	    if (isNaN(Number(rightSide[j])) == false) {

		if (j != 0) {	
		    rightSideVariables[j] += Number(rightSide[j]);	    
		}

	    } else {
		rightSideVariables[j] = rightSide[j];
	    }
	    
	    //If the equation contains an exponent
	    if (rightSideVariables[j] == "^") {
		rightSide = rightSide.replace("^", "**");
	    }

	    
	    
	}

	eval(this.notvars + "= input");
	
	var result = eval(rightSide);
	console.log(result);
	
	var test = document.getElementById("1");

	// document.getElementById("result").remove();
	
	test.insertAdjacentHTML("beforeend", `<div id='result'>  <p class="latex"> ${leftSide} = ${result}  </p>    </div>`);


	// pairObjects()

    }

    //Detects what unknown variable is pressed and inserts a textbox to get user input. 
    getInput(variable){

	var main = document.getElementById(this.selectedId).parentElement.parentElement;

	if (clickable == false) {

	    var tempId = JSON.stringify(this.ids);
	    var tempObj = JSON.stringify(this);
	    var varString = JSON.stringify(variable);
	    
	    main.insertAdjacentHTML("beforeend", `<div id='temp'>  <input type='text' class='tempinput' id='tempinput' name='formula'><button class='tempbutton' onclick='removeField(${tempId}, ${tempObj}, ${varString})'>Lös för ${variable} </button> </div>`);

	} 
    }

    //Removes the textbox and returns the data of the input.
    // removeField(){

    // 	// console.log(item.id);

    // 	var content = document.getElementById("tempinput").value; 
   
    // 	console.log(content);
    
    // 	document.getElementById(this.obj.id).classList.remove("toggle");
    // 	document.getElemnentById("temp").remove();

    // 	clickable = true;
    // 	return content;
    // }

}


//================================================================================================================

// formulas.push(new Formula("\[ E=mc^2a) \]", "korv", ["E", "m"], ["i","ii"]));
formulas.push(new Formula("\[ E = m * c^2 \]", "korv", ["E", "m"], ["i","ii"]));

formulas.push(new Formula("\[ F = 30 + a   \]", "korv", ["F", "m", "a"], ["iii","iv", "v"]));

//================================================================================================================


var clickable = true;

function unknown(obj){

    if (clickable == true) {
	clickable = false;

	obj.classList.add("toggle");
	var variable = obj.children[0].className;

	pairObjects(obj).getInput(variable);
	
    } else {
	obj.classList.remove("toggle");
	document.getElementById("temp").remove();
	document.getElementById("result").remove;
	clickable = true;
    }
    
    
}


//Removes
function removeField(itemId, obj, variable){
    
    for (var i = 0; i < itemId.length; i++) {
	document.getElementById(itemId[i]).classList.remove("toggle");
    }
    
    var content = document.getElementById("tempinput").value; 
    // console.log(content);

    // console.log(obj.formula);

    document.getElementById("temp").remove();

    clickable = true;

    // var formula = obj.formulaTest;
    
    // console.log(variable);


    // console.log(object);

    // obj.formulaLatex(content,variable);


    var clickedObject;

    for (var r = 0; r < formulas.length; r++) {

	// console.log(obj.ids);
	// console.log(formulas[r].ids);

	// for (var l = 0; l < obj.ids.length; l++) {


	//     console.log(obj.ids[l]);
	//     console.log(formulas[r].ids[l]);	    



	//     if (obj.ids[l] == formulas[r].ids[l]) {
		
		
	// 	console.log("bingo");
	//     }
	    
	// }

	if (obj.ids[0] == formulas[r].ids[0]) {

	    clickedObject = formulas[r];
	}


	
    }

    // console.log(clickedObject);
    if (document.getElementById("result") != null) {
	document.getElementById("result").remove();	
    }

    
    clickedObject.formulaLatex(content, variable);
    
    // console.log(clickedObject == formulas[1]);
    
    // return content;


    
}


//Remove
function getEquation(equation) {

    // console.log(equation);

    var leftSide = equation.split("=")[0];
    var rightSide = equation.split("=")[1];

    // console.log(leftSide);
    // console.log(rightSide);

    let leftSideVariables = [];
    let rightSideVariables = [];

    for (var i = 0; i < leftSide.length; i++) {
	leftSideVariables[i] = leftSide[i];

    }
    // console.log(leftSideVariables);



    
    for (var j = 0; j < rightSide.length; j++) {
	rightSideVariables[j] = rightSide[j];
	
	//If the equation contains an exponent
	if (rightSideVariables[j] == "^") {


	    
	    
	    
	    var base = rightSideVariables[j-1];
	    var exponentString = rightSide.split("^")[1].split(")")[0];
	    var exponent = [];

	    // console.log(base);
	    // console.log(exponent);

	    
	    
	    for (var k = 0; k < exponentString.length; k++) {
		// console.log(exponentString[k]);
		// exponent[k]  = parseFloat(exponentString[k]);		    
		// console.log(exponentString[k]);


		if (isNaN(parseFloat(exponentString[k])) == false){
		    exponent[k] = parseFloat(exponentString[k]);		    
		} else {
		    exponent[k] = exponentString[k];
		}
		

		
		// console.log(typeof(exponent[k]));
		console.log(exponent[k]);

		
		

		// if (typeof(exponent[k])  == NaN) {
		//     console.log("Not a number");
		//     console.log(exponent[k]);
		// }
		
	    }

	    console.log(exponent);


	    console.log(rightSide);


	    rightSide = rightSide.replace("^", "**");
	    console.log(rightSide);

	    var result = eval(rightSide);
	    console.log(result);
	    
	}

	
    }

    // console.log(rightSideVariables);
    


    
}


function pairObjects(obj) {

    
    var clickedObject;
    for (var i = 0; i < formulas.length; i++) {
	
	for (var j = 0; j < formulas[i].obj.length; j++) {

	    if (formulas[i].obj[j] == obj) {
		clickedObject = formulas[i];
		clickedObject.selectedId = clickedObject.obj[j].id;
	    }
		
	}
	    
    }

    return clickedObject;
    
}
