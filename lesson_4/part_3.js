//1 
function func4 (arr){

  let max = undefined;

  for (let chain_step = 1; chain_step < arr.length; chain_step++){

      for (let arr_pos = 0; arr_pos < arr.length; arr_pos++){
        let elems = chain_step;
        let inner_pos = arr_pos;
        let elem_summ = 0;

        while(elems-- > 0){
            if(inner_pos++ < arr.length){
                elem_summ+=arr[inner_pos];
            }
        }

        if (max === undefined || max < elem_summ)
            max = elem_summ;
      }
  }

  return max;
}
let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];



//2
let arr =[2, [3, [4, 5]], 2,[2, [5]]];
function func5(arr){
    let new_arr = [];
    
    if (arr instanceof Array){
        for(let item of arr){
            if (item instanceof Array){
               let tmp_arr  = func5(item);

               for (let arr_item of tmp_arr){
                   new_arr.push(arr_item)
               }
            }else{
                new_arr.push(item);
            }
        }
    }

    return new_arr;
    
}


//3
const add = (a) => {
    let sum = a;
    const func = (b) => {
    
            sum += b;
            return func;

        };
        func.toString = function () {
            return sum;
          };
        return func;
    }


//4 
let str = '123456781';
function mask (stringValue){
    let arr = [];
    for(let  i = 0; i < stringValue.length-4; i++ ){
      arr.push(stringValue.charAt(i));
        for(item = 0; item < arr.length; item++){
            arr[item] = "*";
        } 
    }
        for(let a = arr.length; a < stringValue.length; a++ ){
            arr.push(stringValue.charAt(a));
        }
       let new_str =  arr.join('');
       return new_str; 
}

// Задача 6. У тебя есть последовательность чисел от 8 до 88. М = [8, ... , 88]. Одно из чисел встречается дважды. Как узнать что это за число?
// два цикла перебирающие массив где второй получает следующее значение после первого, сравнивать два числа с помощью if
