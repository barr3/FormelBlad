"use strict";



class Formula {
    constructor(formula, explainaiton) {

	this.formula = formula;
	this.explaination = explainaiton;

	this.createRest();
	
    }

    createRest() {
	document.getElementById("0").innerHTML += "<div class='Formula'>  <p>"+ this.formula  + "</p>  <p>" + this.explaination  + " </p>       </div>";
    }
    
    
}


// let einstein = new Formula("\[ E = mc^2  \]", "$E$ är energin, $m$ är massan, och $c är ljusets hastighet$ ");


function unknown(obj){

    var variable = obj.children[0].className;
    var formula = variable.split(" ")[1];
    variable = variable.split(" ")[0];
    var nr = obj.parentElement.id;

    // console.log(obj.children[0].className);
    // console.log("hej");
    // console.log(variable);

    // console.log(variable);
    // console.log(formula);

    switch (formula){

    case "einstein":
	// console.log("Einsteincheck");
	einstein(nr, variable);
	
    }
    
}


function einstein(nr, variable){

    const c = 299792458;
    
    if (variable == "E") {
	// getInput();
	var m = getInput(nr);
	return m * c^2;

	 
    } else if (variable == "m") {
	
    } 
    
}


function getInput(nr){
    document.getElementById(nr).insertAdjacentHTML("afterend", '<input type="text" name="formula"><button onclick="clear()">Hej');

}
