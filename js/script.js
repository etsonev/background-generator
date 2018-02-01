var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBtn = document.getElementById("generate-btn");
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	css.textContent = body.style.background + ";";
}

function randomColor() {
	const randomNum = () => {
		const num = Math.floor(Math.random() * 255).toString(16);
		if(num.length < 2) {
			return "0" + num;
		}
		return num;
	};
	return "#" + randomNum() + randomNum() + randomNum();
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

rndBtn.addEventListener("click", randomGradient);

console.log(css, color1, color2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);