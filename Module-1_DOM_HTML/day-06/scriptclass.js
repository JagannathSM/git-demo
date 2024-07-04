// CREATE CLASS MOVIE

class movie{
    constructor(name,studio,rating='PG'){
        this.name=name;
        this.studio=studio;
        this.rating=rating;
    }
    getname(){
        return `Name of Movie is-${this.name}`
    }
    getstudio(){
        return `Name of the production Studio is-${this.studio}`
    }
    getrating(){
        return `Rating of the movie-${this.rating}`
    }
}
var obj = new movie('Casino Royale','Eon Productions','PG13');
console.log(obj.getname());
console.log(obj.getstudio());
console.log(obj.getrating());

let mov1 = new movie('Movie_1', 'Silver');
let mov2 = new movie('Hollywood', 'gold','PG15');
let mov3 = new movie('Kollywood', 'silver', 'PG');
let mov4 = new movie('Action', 'platinum','PG15');

function getPG(mov) {
 let res = []
 for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == 'PG') {
     res.push(mov[i].title);
    }
 }
 return res;
}
let arr = [mov1, mov2, mov3, mov4]
console.log(getPG(arr))


// CREATE CLASS CIRCLE

class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getradius(){
        return `Radius of circle - ${this.radius}`;
    }
    setradius(r){
        this.radius=r;
        return `Radius of circle changes to - ${this.radius}`;
    }
    getcolor(){
        return `Circle color is - ${this.color}`;
    }
    setcolor(){
        return `Circle color changes to - ${this.color}`;
    }
    getArea(){
        var r = this.radius;
        var area=Math.PI*r*r;
        return `Area of circle which having radius - ${r} is ${area.toFixed(2)}`;
    }
    getCircumference(){
        var r = this.radius;
        var circumference = 2*Math.PI*r;
        return `Circumference of circle which having radius - ${r} is ${circumference.toFixed(2)}`;
    }
}
var ob1 = new circle(12.66,'RED');
console.log(ob1.getradius());
console.log(ob1.setradius(13));
console.log(ob1.getcolor());
console.log(ob1.setcolor('BLUE'));
console.log(ob1.getArea());
console.log(ob1.getCircumference());


// CREATE PERSON CLASS TO HOLD ALL DETAILS

class person {
    constructor(name,age,gender,id,mark){
        this.name=name;
        this.id=id;
        this.mark=mark;
        this.gender=gender;
        this.age=age;
    }
    getpersondetails(){
        return `
        Name    - ${this.name}
        ID      - ${this.id}
        Mark    - ${this.mark}
        Gender  - ${this.gender}
        Age     - ${this.age}`
    }
    setname(n){
        this.name=n;
    }
    setid(x){
        this.id=x;
    }
    setage(a){
        this.age=a;
    }
}
var ob2 = new person('Mukesh',57,'Male','AAA9091','80%');
console.log(ob2.getpersondetails());
ob2.setname('Magesh');
ob2.setid('AA9091DD');
ob2.setage(38);
console.log(ob2.getpersondetails());


// CLASS TO CALCULATE UBER PRICE

class uber{
    constructor(distance,discount=0){
        this.distance=distance;
        this.discount=discount;
    }
    getdetails(){
        return `
        Distance of the ride - ${this.distance}KM
        Discount of the ride - ${this.discount}%`;
    }
    setdiscount(dis){
        this.discount=dis;
        console.log(`
        You got discount of - ${this.discount}%`);
    }
    getmoneytopay(){
        console.log(`
        You got discount of - ${this.discount} and 
        your travel KM is - ${this.distance},
        We charge 30Rs per KM.`)
        var d = this.distance;
        var x = this.discount;
        if(x==0){
            return `
            Your Uber price is - ${d*30}`;
        }
        else{
            var charge = d*30;
            var fair = x*charge/100;
            return `
            Your Uber actual price is - ${charge} and 
            got discount of Rs.${fair},
            Your Uber price is - ${charge-fair}`;
        }
    }
}

var ob3 = new uber(15);
console.log(ob3.getdetails());
console.log(ob3.getmoneytopay());
ob3.setdiscount(20);
console.log(ob3.getdetails());
console.log(ob3.getmoneytopay());

