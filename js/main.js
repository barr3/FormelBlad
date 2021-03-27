"use strict";

let formulas = [];

class Formula {
    constructor(formula, explainaiton, vars, ids) {

	this.formula = formula;
	this.explaination = explainaiton;
	this.ids = ids;
	this.vars = vars;
	this.selectedId;
	this.obj = [];

	for (var i = 0; i < this.ids.length; i++) {
	    this.obj.push(document.getElementById(this.ids[i]));	    
	}
	
	

	// this.id = this.obj.parentElement.parentElement.id;

	
	this.numOfVars = vars.length;

	// for (var i = 0; i < this.numOfVars; i++) {
	//     this.vars[i] = vars[i];
	// }

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



    getInput(variable){

	var main = document.getElementById(this.selectedId).parentElement.parentElement;

	if (clickable == false) {

	    for (var i = 0; i < this.numOfVars ; i++) {
		
	    }
	    var tempId = JSON.stringify(this.ids);
	    main.insertAdjacentHTML("beforeend", `<div id='temp'>  <input type='text' class='tempinput' id='tempinput' name='formula'><button class='tempbutton' onclick='removeField(${tempId})'>Lös för ${variable} </button> </div>`);

	} 
    }

    
    removeField(){

	// console.log(item.id);

	var content = document.getElementById("tempinput").value; 
   
	console.log(content);
    
	document.getElementById(this.obj.id).classList.remove("toggle");
	document.getElemnentById("temp").remove();

	clickable = true;
    }

}


formulas.push(new Formula("\[ E = mc^2 \]", "korv", ["E", "m"], ["i","ii"]));



var clickable = true;

function unknown(obj){
    
    if (clickable == true) {
	clickable = false;
	var clickedObject; 

	for (var i = 0; i < formulas.length; i++) {

	    for (var j = 0; j < formulas[i].obj.length; j++) {

		
		if (formulas[i].obj[j] == obj) {
		    clickedObject = formulas[i];

		    clickedObject.selectedId = clickedObject.obj[j].id;
		}
		
	    }

	    
	}
	
	
	// formulas.forEach(element => if (element == formulas[i].obj) {
	    
	// })

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



	// console.log(clickedObject.formula);
	// console.log(variable);
	// console.log(clickedObject);
	
	clickedObject.getInput(variable);
	
	// switch (formula){

	// case "einstein":
	//     // console.log("Einsteincheck");
	//     einstein(nr, obj, variable);
	
	// }
	
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


// function getInput(nr, obj, variable){

//     if (clickable == false) {
// 	document.getElementById(nr).insertAdjacentHTML("beforeend", '<div id="temp">  <input type="text" class="tempinput" id="tempinput" name="formula"><button class="tempbutton" onclick="removeField('+ obj.id +')">Lös för '+ variable +' </button> </div>');
//     } 

	
// }


function removeField(item){
    
    for (var i = 0; i < item.length; i++) {
	document.getElementById(item[i]).classList.remove("toggle");
    }
    
    var content = document.getElementById("tempinput").value; 
    console.log(content);

    document.getElementById("temp").remove();
    clickable = true;
}



