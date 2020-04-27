/* chama os a box do html para ser manibulado */
const modalOver = document.querySelector(".modal_over")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

/* adicionar um evendo ards*/;
for(let card of cards){
  card.addEventListener("click", function(){
    const id = card.getAttribute("id")
    window.location.href = `course/${id}`

  })
}







