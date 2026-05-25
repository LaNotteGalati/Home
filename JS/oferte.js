const offers = [

{
tag: "Christmas Special",
title: "5-Course Christmas Dinner",
description:
"Celebrate Christmas Eve with a curated tasting menu, live piano ambience, and complimentary champagne.",
price: "$85 / person",
image: "../Images/Oferte.jpg",
menu: [
{
name: "Truffle Mushroom Soup",
desc: "Creamy mushroom velouté with truffle oil"
},
{
name: "Dry Aged Ribeye",
desc: "Served with roasted vegetables"
},
{
name: "Chocolate Lava Cake",
desc: "Dark chocolate center with vanilla cream"
}
]
},

{
tag: "Ofertă de paști",
title: "Paști",
description:
"Un meniu nou doar de paști cu gustări, fel principal și desert!",
price: "120LEI / Persoană",
image: "../Images/Oferte/Pasti.jpg",
button: "Rezervați",
menu: [
{
name: "Truffle Mushroom Soup",
desc: "Creamy mushroom velouté with truffle oil"
},
{
name: "Dry Aged Ribeye",
desc: "Served with roasted vegetables"
},
{
name: "Chocolate Lava Cake",
desc: "Dark chocolate center with vanilla cream"
}
]
},

{
tag: "Valentine's Evening",
title: "Candlelight Dinner for Two",
description:
"A romantic multi-course dinner with wine pairing and chef-selected desserts.",
price: "$120 / couple",
image: "../images/valentines.jpg",
button: "Rezervați",
menu: [
{
name: "Truffle Mushroom Soup",
desc: "Creamy mushroom velouté with truffle oil"
},
{
name: "Dry Aged Ribeye",
desc: "Served with roasted vegetables"
},
{
name: "Chocolate Lava Cake",
desc: "Dark chocolate center with vanilla cream"
}
]
}

];



const container =
document.getElementById("offersContainer");



offers.forEach((offer,index) => {

container.innerHTML += `

<article class="offer-card">

<img src="${offer.image}">

<div class="offer-content">

<span class="offer-tag">
${offer.tag}
</span>

<h2>
${offer.title}
</h2>

<p>
${offer.description}
</p>

<div class="offer-footer">

<span class="offer-price">
${offer.price}
</span>

<button
class="offer-btn"
onclick="toggleMenu(${index})">

View Menu

</button>

</div>



<!-- EXPANDABLE MENU -->

<div
class="offer-menu"
id="menu-${index}">

${offer.menu.map(item => `

<div class="menu-item">

<h4>${item.name}</h4>

<p>${item.desc}</p>

</div>

`).join("")}

</div>

</div>

</article>

`;

});

function toggleMenu(index){

const menu =
document.getElementById(`menu-${index}`);

menu.classList.toggle("active");

}