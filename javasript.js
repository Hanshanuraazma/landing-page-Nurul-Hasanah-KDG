<script src="script.js"></script>
</body>
</html>
setTimeout(function)(){
	alert("Selamat Datang di Toko Online Kami");
},3000);
const heroTeks = document.querySelector("#hero2");
const colors = ["#FF5733", "33FF57", "#3357FF"];
let colorIndeks = 0;

function changeHeroTextColor(){
	heroText.style.color = color[colorIndeks];
	colorIndeks = (colorIndeks + 1)% color.length;
}

setInterval(changeHeroTextColor), 2000);
let currentImageIndex = 0;
const image = ["img/AyamGeprek01.jpg", "img/AyamGeprek02.png", "img/AyamGeprek03.png"];


function changeHeroImage(){
	currentImageIndex = (currentImageIndex + 1)% images.length;
	document.querySelector(
		"#hero"
		).style.backgroundImage = url('${images[currentImageIndex]}')';
}

setInterval(changeHeroImage,2000);

const productImage = document.querySelectorAll(".product-card img");


productImage.forEach(image) =>{
	image.addEventListener("click", ()=>{
		image.style.transform = "scale(1.5)";
		image.style.transition = "transform 0.5s";
	});
	image.addEventListener("mouseleave", ()=> {
		image.style.transform = "scale(1)";
	})
});

document.querySelectorAll("cta").forEach(function(buton) {
	button.addEventListener("click", function(event) {
}
event.preventDefault();
alert("Terima kasih telah membeli produk ini!");
	});
});

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll"),()=>{
	if (window.scrolly >100) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
};


scrollToTopBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

