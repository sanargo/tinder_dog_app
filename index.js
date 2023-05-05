import dogsData from "./data.js";
import Dog from "./Dog.js"

const main = document.getElementById("main")
const likeBtn = document.getElementById("like-btn")
const dislikeBtn = document.getElementById("dislike-btn")

let counter = 0

document.addEventListener("click", (e) => {
    if (e.target.id === "like-btn") {
        handleLike(getDogData())
    } 
    if (e.target.id === "dislike-btn") {
        handleDislike(getDogData())
    }
})


const getDogData = () => { 
    if (counter < dogsData.length) {
        return new Dog(dogsData[counter]) 
    }
}

const render = (dog) => { main.innerHTML = dog.getDogHtml() }

const handleLike = (dog) => {
    if (!dog.hasBeenSwiped) {
        likeBtn.disabled = true
        dislikeBtn.disabled = true
        main.innerHTML += dog.setLikedHtml()
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = true
        setTimeout( () => {
            counter += 1
            if (counter < dogsData.length) {
                likeBtn.disabled = false
                dislikeBtn.disabled = false
                render(getDogData())
                }
            }, 1000)
    }
}

const handleDislike = (dog) => {
    if (!dog.hasBeenSwiped) {
        dislikeBtn.disabled = true
        likeBtn.disabled = true
        main.innerHTML += dog.setDislikedHtml()
        dog.hasBeenSwiped = true
        setTimeout( () => {
            counter += 1
            if (counter < dogsData.length) {
                likeBtn.disabled = false
                dislikeBtn.disabled = false
                render(getDogData())
            }
        }, 1000)
    }
}

render(getDogData())