const openCart = document.querySelector('.openCart');
const cart = document.querySelector('.cart');

const productsJSON = {

	"product1" : 
		{
			"img" : "chainsaw1.png",
			"name" : "A Fine Chainsaw",
			"brand" : "Stihl",
			"color" : "Orange",
			"price" : "1 x $177,00"
		},
	"product2" : 
		{
			"img" : "sunglasses1.jpg",
			"name" : "Cheap Sunglasses",
			"brand" : "Roy Bam",
			"color" : "Black",
			"price" : "2 x $20,00"
		},
	"product3" : 
		{
			"img" : "tire1.jpg",
			"name" : "A Tire",
			"brand" : "Sava",
			"color" : "Black",
			"price" : "2 x $60,00"
		},
	"product4" : 
		{
			"img" : "shovel1.jpg",
			"name" : "A Shovel",
			"brand" : "Jailbreak",
			"color" : "Yellow Black",
			"price" : "1 x $55,00"
		},
	"product5" : 
		{
			"img" : "screwdrivers1.jpg",
			"name" : "A Set of Screwdrivers",
			"brand" : "Icon",
			"color" : "Red 'n' Black",
			"price" : "3 x $33,99"
		}
};

const numberOfObjects = Object.keys(productsJSON).length;

openCart.addEventListener('click', () => {
	if(!cart.classList.contains('close')){
		cart.style.display = 'flex';
		cart.innerHTML = `
				<p><b>My Cart (${numberOfObjects})</b></p><br>
				<button id="up" disabled><i class="fa fa-caret-up" style="font-size:18px"></i></button>
				
				<div class="productsContainer">
					<div class="products">
						
					</div>
				</div>
				<button id="down"><i class="fa fa-caret-down" style="font-size:18px"></i></button>	
				<div class="buttons">
					<button id="editButton">Edit Cart</button>
					<button id="checkoutButton">CHECKOUT</button>
				</div>
		`;

		const prods = document.querySelector('.products');

		for(key in productsJSON){
			let img = productsJSON[key]['img'];
			let name = productsJSON[key]['name'];
			let brand = productsJSON[key]['brand'];
			let color = productsJSON[key]['color'];
			let price = productsJSON[key]['price'];

			let prod = document.createElement('div');
			prod.className = 'product';
			prod.innerHTML = `
					<img src="imgs/${img}" class="image">
					<div class="attributes">
						<h5>${name}</h5>
						<div class="middleAttributes">
							<small>Brand: ${brand}</small><br>
							<small>Color: ${color}</small>
						</div>
						<h5>${price}</h5>
					</div>
			`;

			let hr = document.createElement('hr');
			prods.append(prod, hr);


		}
		
		cart.classList.add('close');
		
		const down = document.getElementById('down');
		const up = document.getElementById('up');
		const products = document.querySelector('.products');
		const productsHeight = document.querySelector('.products').offsetHeight;
		const numberOfProducts = document.querySelectorAll('.product').length;

		let counter = 0;

		down.addEventListener('click', () => {
			counter++;
			up.disabled = false;
			products.style.transform = `translateY(-${(counter*productsHeight)/numberOfProducts}px)`;
			
			if(counter >= (numberOfProducts - 3)){
				down.disabled = true;
			}
		})

		up.addEventListener('click', () => {
			counter--;
			down.disabled = false;
			products.style.transform = `translateY(-${(counter*productsHeight)/numberOfProducts}px)`;
			if(counter < 1){
				up.disabled = true;
			}
		})
	
	} else {
		cart.style.display = 'none';
		cart.classList.remove('close');
		cart.innerHTML = '';
	}
})






























