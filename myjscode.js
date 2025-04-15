personData={
personid:101,
personName:"Jack",
age:30,
 personCars:{
   car1:"Swift",
   car2:"BMW",
   car3:"Alto"
 }

};

console.log(personData.personName + " has these cars:");
// console.log(personData.personCars.car1);
// console.log(personData.personCars.car2);
// console.log(personData.personCars.car3);
console.log(personData.personCars["car1"]);
console.log(personData.personCars["car2"]);
console.log(personData.personCars["car3"]);

console.log("-----------------------------------------------")
function Product(productid,productname,price,categoryid)
{
this.prodid=productid;
this.prodname=productname;
this.productprice=price;
this.catid=categoryid;

this.productDetails=function()
{
return this.prodid + " " + this.prodname;

};



}

const productobj=new Product(1,"Tea",10,101);
console.log(productobj.prodid);
console.log(productobj.prodname);
console.log(productobj.productprice);
console.log(productobj.catid);

document.getElementById("details").innerHTML=productobj.productDetails();

Product.prototype.changeProductName=function(name){
this.prodname=name;

}
productobj.changeProductName("coffee");
console.log("After changing product data details: ")
console.log(productobj.prodid);
console.log(productobj.prodname);
console.log(productobj.productprice);
console.log(productobj.catid);