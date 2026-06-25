const products=[
    {
        name:"Laptop",
        description:"High performane laptop for work and gaming",
        price:"₹80,000",
        image:"laptop.avif",
    },
    {
        name:"Smartphone",
        description:"Latest Android smartphone with amazing camera",
        price:"₹35,000",
        image:"phone.webp",
    },
    {
        name:"Headphones",
        description:"Wireless headphone with noise cancellation",
        price:"₹5,000",
        image:"headphone.avif",
    },
    {
        name:"Smart Watch",
        description:"Track your Health and phone manage",
        price:"₹2,499",
        image:"watch.jpg",
    },
    {
        name:"Lg AC",
        description:"Helps regulate temprature, humidity and air quality",
        price:"₹39,999",
        image:"ax.webp"
    },
];
const cardContainer=document.getElementById("cardContainer");
const name='Manika';
cardContainer.innerHTML=products.map(
    (product)=>
     `<div class="card">
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <h4>${product.price}</h4> 
    </div>
    `
);