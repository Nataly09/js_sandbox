

class Human{
    constructor(name, age){
        if(typeof name === 'string'){
            this.name = name;
        };
         if (typeof age === 'number' ){
                this.age = age;
        };
    }
    sayHello(){
        console.log('Hello, my name is ' + this.name + ' I am ' + this.age + ' years old')
    }
}



class AlevelStudent extends Human{
    constructor(name, age, marks = [0]){
        super(name, age);
        if (marks instanceof Array){
        this.marks = marks;
    }}
     a(){console.log(this.marks);}
    averageMark(){ 
        let sum = 0;
         for (let item = 0; item < this.marks.length; item++ ){
            sum += this.marks[item];
         }
         let result = sum /  this.marks.length;
          return result;
    }
}
arr = [1, 2, 4, 5, 4, 3, 4];


//2


class Calculator {
    constructor(result, num) {
        this._result = 0;
        this.num = num;
    }
    reset() { this._result = 0; return this; }
    add(num) { if (typeof num === 'number'){ 
        this._result += num; return this; }}
    sub(num) { if (typeof num === 'number'){ 
        this._result -= num; return this; }}
    mul(num) { if (typeof num === 'number'){ 
         this._result *= num; return this; }}
    div(num) { if (typeof num === 'number'){ 
         this._result /= num; return this; }}
    pow(num) { if (typeof num === 'number'){ 
         this._result = Math.pow(this._result, num); return this; }}
    sqrt() { this._result = Math.sqrt(this._result); return this; }
    getResult() {
        return this._result;
    
    }
   
}


//3 

class Point{
    constructor(x, y){
        if(typeof x === 'number'){
        this.x = x;}
        if(typeof x === 'number'){
        this.y = y;}
    }
    toString() {
        return 'Point[' + this.x + ' ' + this.y + ']';
    }
    set(x, y) {
         x = this.x 
         y = this.y 
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

class  Line {
    constructor(point1, point2,){
        this.point1 = point1;
        this.point2 = point2;
    }
    toString() {
        return 'Line(' + this.point1 + '-' + this.point2 + ')';
    }
    length(){
        return Math.sqrt(Math.pow(this.point2.x - this.point1.x, 2) + Math.pow(this.point2.y - this.point1.y, 2));
    }
}

 
class WeightedPoint extends Point{
    constructor(x, y, weight){
        super(x, y);
        this.weight = weight;
    }
    toString(){
        return ( this.weight + '&' + 'Point[' + this.x + ' ' + this.y + ']');
    }
    set(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
}
const point1 = new Point(2, 3.4);
const point2 = new WeightedPoint(-1, 0.5, 3);
const line = new Line(point1, point2);


//4

class CalculatorExtended extends Calculator{
    constructor(num, result, restore) {
        super(num, result);
        this.restore = restore;
    }
    reset() { this._result = 0;
        this.restore = 0;
        return this; }
    add(num) { if (typeof num === 'number'){ 
        this._result += num; 
        this.restore = '(' +  this.restore + ' + ' + num + ')';
        return this; }}
    sub(num) { if (typeof num === 'number'){ 
        this._result -= num;
        this.restore = "(" + this.restore + ' - ' + num + ")";
         return this; }}
    mul(num) { if (typeof num === 'number'){ 
         this._result *= num; 
         this.restore = '(' +  this.restore + ' * ' + this._result  + ')';
         return this; }}
    div(num) { if (typeof num === 'number'){ 
         this._result /= num;
         this.restore = '(' +  this.restore + ' / ' + this._result  + ')';
          return this; }}
    pow(num) { if (typeof num === 'number'){ 
         this._result = Math.pow(this._result, num);
         this.restore = '(' + this.restore + ' ^ ' + this._result + ')';
         return this; }}
    sqrt() { this._result = Math.sqrt(this._result);
        this.restore = '(' + this.restore + ' √ ' + this._result + ')';
         return this; }
    getResult() {
        return this._result;
    }
    toString() {
        return this.restore + ' = ' + this._result;
    }
}


const calc = new CalculatorExtended();


//5
function withUniqueID(parentClass){
    return SomeClass; 
}
