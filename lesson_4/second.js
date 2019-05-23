

//2

function print(size){
    let general = "";

    for (let pos = 0; pos <= size; pos++){
        let line = "+";
        for (let inner_counter = 0; inner_counter<pos; inner_counter++, line = " " + line);

        for (let inner_counter = 0; inner_counter < (size-pos)*2-1; inner_counter++, line += " " );

        if (pos < size)
            line += "+\n";

        general+=line;
    }

    return general;

}

function print2(){

}


//3
function calculate(){
 const result = { 'history': [], 'formula': '', 'args': {} };
let formula = +prompt('Выборите формулу 1)“y = kx + b” или 2)“y = x^2”');
if(formula === 1){
    result.formula = 'y = kx + b';
    let k = prompt('k=');
    let x = prompt('x=');
    let b = prompt('b=');
    if(k !== Infinity || k !== NaN || x !== Infinity || x !== NaN || b !== Infinity || b !== NaN){
     result.args.k = k;
     result.args.x = x;
     result.args.b = b;
    let y = k*x + b;
    result.history.push(result.args.k);
    result.history.push(result.args.x);
    result.history.push(result.args.b);}else if(formula === null){
        result.history.push('exit');
        return result;}
    return result;
}else if(formula === 2){
    result.formula = 'y = x^2';
    let x = prompt('x=');
    if( x !== Infinity || x !== NaN){
    let y = Math.pow(x, 2); 
    result.args.x = x;
    result.history.push(result.args.x);}
    else if(formula === null){
        result.history.push('exit');
        return result;}
    return result;
}else if(formula === null){
    result.history.push('exit');
    return result;
}else{
     calculate();
 }
}




