//1
function makeImages(...args){

    for(i = 0; i < args.length; i++){
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = args[i];
      document.body.append(div);
      div.appendChild(img);
     }
}
//makeImages('https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg', 'https://zabavnik.club/wp-content/uploads/kartinki_32_07140102.jpg', 'https://bipbap.ru/wp-content/uploads/2017/08/68f5ef52e27ct.jpg');

//2

class FormBuilder{
    constructor(form){
        this.form = document.createElement('form');
    }
    appendTo(target){
        document.body.append(target);
        target.appendChild(this.form);
        return this; 
    }
    addInput(name){
        let input = document.createElement('input');
        input.name = name;
        input.setAttribute('type', 'text');
        this.form.appendChild(input);
        return this; 
    }
    addCheckbox(name){
        let input = document.createElement('input');
        input.name = name;
        input.setAttribute('type', 'checkbox');
        this.form.appendChild(input);
        return this; 
    }
    addButton(name){
        let button = document.createElement('button');
        button.name = name;
        this.form.appendChild(button);
        return this; 
    }
    destroy() {
    let parentElement = this.form.parentElement;
    parentElement.removeChild(this.form);
    return this ;
    }
}
let div = document.createElement('div');


//3

function initBall(){
    const div = document.createElement('div');
    
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

   let styles = {
    width: '40px',
    height:'40px',
    background: 'purple',
    borderRadius: '50%',
    position: 'absolute',
    left: x+'px',
    top: y+'px'
   }
   
   for  (let style in styles){
       div.style[style] = styles[style];
   }

   console.log(div.style)


    document.body.append(div);
  
    div.addEventListener('click', (event) =>{
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        div.style.left = x+ "px";
        div.style.top = y+ "px";
        event.stopImmediatePropagation();

    });
    
    document.addEventListener('click', () =>{
        if(div != event.target){
        div.parentElement.removeChild(div);
        event.stopImmediatePropagation();
        }
    });

}

