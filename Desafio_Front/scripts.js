/* chama os a box do html para ser manibulado */
const modalOver = document.querySelector(".modal_over")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

/* adicionar um evendo ards*/;
for(let card of cards){
  card.addEventListener("click", function(){
    modalOver.classList.add("active")

    let verdadeiro = modal.classList.contains("max-m")

    if(!verdadeiro == true){
      document.querySelector(".ampliar").addEventListener("click", function(){
        modal.classList.toggle("max-m")
      })
    }else{
      modal.classList.remove("max-m")
    }
    
  })
}
/* == remove o modal */
document.querySelector(".close-modal").addEventListener("click", function(){
  modalOver.classList.remove("active")
})








