const cardArray = [
	{
		name:"callCenter",
		img: "images/call-center.png",
	},
	{
		name:"canvas",
		img: "images/canvas.png",
	},
	{
		name:"dog",
		img: "images/dog.png",
	},
	{
		name:"family",
		img: "images/family-picture.png",
	},
	{
		name:"food",
		img: "images/food.png",
	},
	{
		name:"hotdog",
		img: "images/hotdog.png",
	},
	{
		name:"man",
		img: "images/man.png",
	},
	{
		name:"photo",
		img: "images/picture.png",
	},
	{
		name:"pictures",
		img: "images/pictures.png",
	},
	{
		name:"pizza",
		img: "images/pizza.png",
	},
	{
		name:"profile",
		img: "images/profile.png",
	},
	{
		name:"picture",
		img: "images/picture.png",
	},
]

cardArray.sort(() => 0.5 - Math.random())
const chosenCArd =[];


const gridDisplay = document.getElementById("grid")

function createBoard () {
	for(let i=0; i<10; i++){
		const card = document.createElement("img");
		card.setAttribute("src"," Images/pizza.png")
		card.setAttribute("data-id", i);
		card.setAttribute("class","image")
		card.addEventListener("click",flipcard)
		gridDisplay.appendChild(card)
		console.log(gridDisplay)
	
	}
}

createBoard()

function flipcard(){

const cardID = this.getAttribute("data-id")
console.log("clicked",cardID)

console.log(cardArray[cardID].name )
chosenCArd.push(cardArray[cardID])
this.setAttribute("src",cardArray[cardID].img )


}