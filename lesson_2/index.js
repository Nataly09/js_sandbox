
var obj = { a: 1, b: [], c: '', m: "f" },
strarr = ['a', 'c'];

function removeKeys(obj, strarr){
    for (var key in obj){
        if (strarr.includes(key)){
            delete obj[key];
        }}   
        return obj;
}


//2 
arr = [[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q', Infinity]];
function clearNumbers(arr){
   for (var index_outer in arr){
       arr[index_outer] = arr[index_outer].filter(item => typeof item === 'number');
   }
   return arr;
}


//3

 function reverse(...args){
   var arr = [], str = '';
    for (var item of args){
   if( typeof item === "string"){
       for(var i = item.length - 1; i >= 0; i--){ 
        str += item.charAt(i);}
        arr.unshift(str);
        str = '';
    }  
}
   return arr;
 }



//4

function join(...args){
    var result = null;

    for (var item of args){ console.log(item);
        if (! result && typeof item === 'object'){
           
            result = item;
            console.log(result, '1');
        }else if(typeof item === 'object'){
            for (var obj_item in item)
                if (obj_item in result){
                   if ( result[obj_item] instanceof Array){ 
                        result[obj_item].concat(item[obj_item])}
                         else if(typeof result[obj_item] === 'object'){
                         result[obj_item] = item[obj_item];
                         
                        }else{result[obj_item] += item[obj_item]};
                }else{
                    result[obj_item] = item[obj_item]};
            
        }
    }

    return result;
}


join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 });
