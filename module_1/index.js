//  let arr1 = [[2, 3], [4, 5]];
//     let arr2 = [[2, 1], [6, 5]];

function matrixDiff(arr1, arr2){
    if(arr1 instanceof Array && arr2  instanceof Array){

        let num1 =0;
        let num2 =0;
    for(let item1 of arr1){
      for( num1   of item1){
         
      }}
     for(let item2 of arr2){  
for( num2 of item2) { 
    
}
}
}
}


//2
function strangeSearch(arr){
    for(let item of arr){
        const div = document.createElement('div');
        document.body.append(div);
        div.innerHTML = item;
        const input = document.createElement('input');
         input.setAttribute('type', 'number');
         input.setAttribute('value', '0');
         div.appendChild(input);
    }
    const button = document.createElement('button');
    button.setAttribute('id', 'go')
    button.innerHTML = 'Search';
    document.body.append(button);
    
}

//3

function mask-input(){
    
}

//4
function stickyСat(){
    const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = 'https://i.ytimg.com/vi/DzcmjMyf1ZY/hqdefault.jpg';
      img.style. width = '80px',
      img.style.height ='80px',
      document.body.append(div);
      div.style.position = 'absolute';
      div.setAttribute('id', 'div');
      div.appendChild(img);

}


window.addEventListener('mousemove', (event) => {
    let div2 = document.getElementById('div');
    div2.style.top = `${event.y}px`
    div2.style.left = `${event.x}px`
   });

function unstickTheСat(){
    let div = document.getElementById('div');
    div.style.display = 'none';
};
