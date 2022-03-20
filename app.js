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
	}
]

const cardArraySorted = cardArray.sort(() => 0.5 - Math.random())


const grid = document.getElementById("grid")
const resultDisplay = document.getElementById("result")

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


//create board 

function createBoard(){
	for(let i = 0; i <cardArraySorted.length; i++){
		const card = document.createElement("img")
		card.setAttribute("src","images/man.png")
		card.setAttribute("data-id",i)
		card.setAttribute("class","cardsClass")
		card.addEventListener("click", flipCard)
		grid.appendChild(card)
		console.log(card)

	}
}
function checkForMatch(){

	const cards = document.querySelectorAll("img")
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if(optionOneId == optionTwoId){

		cards[optionOneId].setAttribute("src","images/man.png")
		cards[optionTwoId].setAttribute("src","images/man.png")
		alert("you have clicked the same image ")

	}

	else if(cardsChosen[0] === cardsChosen[1]){
		alert("you have found a match")
		cards[optionOneId].setAttribute("src","images/white.png")
		cards[optionTwoId].setAttribute("src","images/white.png")
		cards[optionOneId].removeEventListener("click",flipCard)
		cards[optionTwoId].removeEventListener("click",flipCard)
		cardsWon.push(cardsChosen)

	}
	else {

		cards[optionOneId].setAttribute("src","images/man.png")
		cards[optionTwoId].setAttribute("src","images/man.png")
		alert("sorry try again")

	}

	cardsChosen = []
	cardsChosenId = []

	resultDisplay.textContent = cardsWon.length

	if(cardsWon.length === cardArraySorted/2 ){
		resultDisplay.textContent ="congratulations you have found all the matches"
	}

}

function flipCard(){

	let cardId = this.getAttribute("data-id")
	cardsChosen.push(cardArraySorted[cardId].name)
	cardsChosenId.push(cardArraySorted[cardId])
	this.setAttribute("src",cardArraySorted[cardId].img)
	console.log(cardsChosen)
	console.log(cardsChosenId)
	if(cardsChosen.length === 2 ){
		setTimeout(checkForMatch, 500)
	}
}

createBoard()

