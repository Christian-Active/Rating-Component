let stars = document.querySelectorAll(".star")
let submit = document.getElementById("submit")
let rate = document.querySelector(".rate")
let complete = document.querySelector(".complete")
let ratings = document.querySelector(".ratings")

for(let i = 0; i < stars.length; i++){
    stars[i].addEventListener("click", () => {
        stars.forEach(star => {
            star.classList.replace("clicked", "star")
        })
        stars[i].classList.replace("star", "clicked")
    })
}

submit.addEventListener("click", () => {
    for(j = 0; j < stars.length; j++){
        if(stars[j].classList.contains("clicked")){
            rate.style.display = "none"
            complete.style.display = "flex"
            ratings.innerHTML = `You selected ${stars[j].innerHTML} out of 5 ratings`
        }
    }
})