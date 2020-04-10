const modalOver = document.querySelector(".modal_over")
const cards = document.querySelectorAll(".card")

for(let card of cards){
  card.addEventListener("click", function(){
    modalOver.classList.add("active")
  })
}

document.querySelector(".close_modal").addEventListener('click', function(){
  modalOverlay.classList.remove('active')
})







