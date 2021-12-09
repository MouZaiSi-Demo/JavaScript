function createCard(name)
{
   this.name = name;
}

class Card
{
   constructor(name)
   {
       this.name = name;
   }
   
   hello ()
   {
       console.log("hello", this.name);
   }
}

let c1 = new Card("ch");

c1.hello();

let c2 = new createCard('mzs');

function hello(object)
{
   console.log("hello", object.name);
}

hello(c2);

const a = {
    name: 'AA',
}

a.helllo = c1.hello;

a.helllo();