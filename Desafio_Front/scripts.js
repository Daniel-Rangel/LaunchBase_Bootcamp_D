/* chama os a box do html para ser manibulado */
const modalOver = document.querySelector(".modal_over")
const cards = document.querySelectorAll(".card")

/* adicionar um evendo ards*/
for(let card of cards){
  card.addEventListener("click", function(){
    modalOver.classList.add("active")
  })
}

/* == remove o modal */
document.querySelector(".close-modal").addEventListener("click", function(){
  modalOver.classList.remove("active")
})








