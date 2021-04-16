"use strict";

let formulas = [];

class Formula {
    constructor(formula, explainaiton, vars, ids) {

	this.formula = formula;
	this.explaination = explainaiton;
	this.ids = ids;
	this.vars = vars;
	// this.selectedId; //not sure if unused
	this.obj = [];

	this.formulaTest = formula.split("[ ")[1].split(" ]")[0];
	this.formulaTest = this.formulaTest.replace(/\s/g, "");
	


	for (var i = 0; i < this.formulaTest.length; i++) {
	    // console.log(this.formulaTest[i]);
	}
	
	
	//Takes all ids and inserts the corresponding DOM-object in the obj array.
	for (var i = 0; i < this.ids.length; i++) { 
	    this.obj.push(document.getElementById(this.ids[i]));	    
	}
	
	this.numOfVars = vars.length;

    }

    //Returns all the variables that are not selected by the user
    //Not implemented yet.
    getOtherVars(e){

	for (var i = 0; i < this.vars.length; i++) {
	    
	    if (this.vars[i] != e) {
		this.notvars[i] = this.vars[i];
	    }
	    
	}
	
    }

    
    formulaLatex(input,formula,variable){
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

	
	getEquation(formula);





	
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
formulas.push(new Formula("\[ E = 2^4a) \]", "korv", ["E", "m"], ["i","ii"]));

formulas.push(new Formula("\[ F=ma   \]", "korv", ["F", "m", "a"], ["iii","iv", "v"]));

//================================================================================================================


var clickable = true;

function unknown(obj){
    
    if (clickable == true) {
	clickable = false;

	//checks the clicked object and matches it with the objects in formulas.
	var clickedObject; 
	for (var i = 0; i < formulas.length; i++) {

	    for (var j = 0; j < formulas[i].obj.length; j++) {

		if (formulas[i].obj[j] == obj) {
		    clickedObject = formulas[i];
		    clickedObject.selectedId = clickedObject.obj[j].id;
		}
		
	    }
	    
	}

	obj.classList.add("toggle");
	var variable = obj.children[0].className;

	clickedObject.getInput(variable);
	
    } else {
	obj.classList.remove("toggle");
	document.getElementById("temp").remove();
	clickable = true;
    }
    
    
}


//Removes
function removeField(item, obj, variable){
    
    for (var i = 0; i < item.length; i++) {
	document.getElementById(item[i]).classList.remove("toggle");
    }
    
    var content = document.getElementById("tempinput").value; 
    // console.log(content);

    // console.log(obj.formula);

    document.getElementById("temp").remove();
    clickable = true;

    var formula = obj.formulaTest;
    
    // console.log(variable);
        
    formulas[0].formulaLatex(content,formula,variable);
    
    
    // return content;


    
}



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

	    console.log(base);
	    // console.log(exponent);

	    
	    
	    for (var k = 0; k < exponentString.length; k++) {
		console.log(exponentString[k]);
		exponent[k]  = Number(exponentString[k]);
		console.log(typeof(exponent[k]));
		console.log(exponent[k]);


		if (typeof(exponent[k])  == NaN) {
		    console.log("Not a number");
		    console.log(exponent[k]);
		}
		
	    }

	    
	    
	    
	    
	}

	
    }

    // console.log(rightSideVariables);
    


    

    
    
}

function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}
