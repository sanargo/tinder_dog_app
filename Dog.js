class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        return `
            <img src="${this.avatar}" alt="Profile image of a dog">
            <div class="info-dog">
                <h3>${this.name}, ${this.age}</h3>
                <p>${this.bio}</p>
            </div>
        `
    }

    setLikedHtml() {
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        return `<img class="nope-banner" src="images/like-image.png" alt="Like banner">`
    } 

    setDislikedHtml() {
        this.hasBeenSwiped = true
        this.hasBeenLiked = false
        return `<img class="nope-banner" src="images/nope-image.png" alt="Dislike banner">`
    } 
}

export default Dog