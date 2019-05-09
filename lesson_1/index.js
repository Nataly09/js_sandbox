//1
function makeGreetings(age){
    var end;
    var alteration = age;
    if (alteration >= 5 && alteration <= 20) {
        end = 'лет';
    } else {
        alteration = alteration % 10;
        if (alteration == 1) {
            end = 'год';
        } else if (alteration >= 2 && alteration <= 4) {
            end = 'года';
        } else {
            end = 'лет';
        }
    }
    

   return "Мой возраст " + parseInt(age) + " " + end;
}


//2
function splitArray(arr, b){
    var arr2 = [];
    var length = arr.length / b;
    for(var i = 0; i < length; i++ ){
         var c = arr.splice(0, b);
        arr2.push(c);
    }
    return arr2;
}

//3
function add(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }

//4
var loginArr = [
    { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
    { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
    { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
   ]

 function transformData(loginArr)
 { 
   var res = {};
     
   for (var logObj of loginArr)
     if (logObj.mark > 5)
         res[logObj.login] = logObj.firstName + " " + logObj.lastName;
 
   return res;
 }

 
 


 
 