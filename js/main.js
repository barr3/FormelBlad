"use strict";

let formulas = [];

class Formula {
    constructor(formula, explainaiton, vars, id, obj) {

	this.formula = formula;
	this.explaination = explainaiton;
	this.id = id;
	this.obj = obj;

	this.numOfVars = vars.length;

	for (var i = 0; i < this.numOfVars; i++) {
	    this.vars[i] = vars[i];
	}

	// this.createRest();

    }

    // createRest() {
    // 	document.getElementById("0").innerHTML += "<div class='Formula'>  <p>"+ this.formula  + "</p>  <p>" + this.explaination  + " </p>       </div>";
    // }

    getOtherVars(e){

	for (var i = 0; i < this.vars.length; i++) {

	    if (this.vars[i] != e) {
		this.notvars[i] = this.vars[i];
	    }
	    
	}
	
    }

    
    formulaLatex(){

    }



    getInput(nr, obj, variable){
	console.log(this.obj.id);
	console.log(variable);

	if (clickable == false) {

	    for (var i = 0; i < this.numOfVars ; i++) {
		
	    }
	    
	    document.getElementById(this.id).insertAdjacentHTML("beforeend", '<div id="temp">  <input type="text" class="tempinput" id="tempinput" name="formula"><button class="tempbutton" onclick="removeField('+ this.obj.id +')">Lös för '+ variable +' </button> </div>');
	} 
	
    }


}


// let einstein = new Formula("\[ E = mc^2  \]", "$E$ är energin, $m$ är massan, och $c är ljusets hastighet$ ");
var clickable = true;

function unknown(obj){
    
    if (clickable == true) {
	clickable = false;
	obj.classList.add("toggle");
	var variable = obj.children[0].className;
	var formula = variable.split(" ")[1];
	variable = variable.split(" ")[0];
	var nr = obj.parentElement.parentElement.id;

	// console.log(obj.children[0].className);
	// console.log("hej");
	// console.log(variable);

	// console.log(variable);
	// console.log(formula);
    
	switch (formula){

	case "einstein":
	    // console.log("Einsteincheck");
	    einstein(nr, obj, variable);
	
	}
	
    } else {
	obj.classList.remove("toggle");
	document.getElementById("temp").remove();
	clickable = true;
    }
    
    
}


function einstein(nr, obj, variable){

    const c = 299792458;
    
    if (variable == "E") {
	// getInput();
	var m = getInput(nr, obj, variable);
	return m * c^2;

	 
    } else if (variable == "m") {
	var E = getInput(nr, obj, variable);
	return E / c^2;
    } 
    return 1;
}


function getInput(nr, obj, variable){
    console.log(obj.id);
    console.log(variable);

    if (clickable == false) {
	document.getElementById(nr).insertAdjacentHTML("beforeend", '<div id="temp">  <input type="text" class="tempinput" id="tempinput" name="formula"><button class="tempbutton" onclick="removeField('+ obj.id +')">Lös för '+ variable +' </button> </div>');
    } 

	
}


function removeField(item){

    // console.log(item.id);

    var content = document.getElementById("tempinput").value; 
   
    console.log(content);
    
    document.getElementById(item.id).classList.remove("toggle");
    document.getElementById("temp").remove();

    clickable = true;
}



