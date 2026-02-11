const prompt=require("prompt-sync")({sigint:true}); 

const Error_enumobj = {
	FP_ROUNDING: "FP_ROUNDING",
	FP_OVERFLOW: "FP_OVERFLOW",
	FP_UNDERFLOW: "FP_UNDERFLOW",
	INT_OVERFLOW: "INT_OVERFLOW"
}

const Result_enumobj = {
    A_BIT_DIFFERENT: "A_BIT_DIFFERENT", 
    INFINITY: "INFINITY", 
    ZERO: "ZERO", 
    VERY_DIFFERENT: "VERY_DIFFERENT"
}

function error2Result(err){
    switch (err) {
	case Error_enumobj.FP_ROUNDING:
	 return Result_enumobj.A_BIT_DIFFERENT;
	break;
	case Error_enumobj.FP_OVERFLOW:
	    return Result_enumobj.INFINITY;
	break;
	case Error_enumobj.FP_UNDERFLOW:
	    return Result_enumobj.ZERO;
	break;
	case Error_enumobj.INT_OVERFLOW:
	    return Result_enumobj.VERY_DIFFERENT;
	break;
	default:
		return 'Invalid Error value';
}

}

function results2Error(result){
	switch(result){
		case Result_enumobj.A_BIT_DIFFERENT: return Error_enumobj.FP_ROUNDING; break; 
		case Result_enumobj.INFINITY: return Error_enumobj.FP_OVERFLOW; break; 
		case Result_enumobj.ZERO: return Error_enumobj.FP_UNDERFLOW; break; 
		case Result_enumobj.VERY_DIFFERENT: return Error_enumobj.INT_OVERFLOW; break; 
	}
}

//console.log('Error list: ', Object.values(Error_enumobj));
console.log('Results list: ', Object.values(Result_enumobj)); 
var validArg = false;
while(!validArg){
    var input = prompt("Input: ");
    //let result = error2Result(input);
	let result = results2Error(input); 
    /**if (Object.values(Result_enumobj).includes(result)){
        validArg = true;
		console.log(input + " results in " + error2Result(input));
    }
    else{
        console.log(result);
    }*/
   if (Object.values(Error_enumobj).includes(result)){
	validArg = true; 
	console.log(input + " results from " + results2Error(input))
   } else {
	console.log(result); 
   }
}
