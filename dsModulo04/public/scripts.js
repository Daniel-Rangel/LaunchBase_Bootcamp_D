const currentPage = location.pathname
const links = document.querySelectorAll('#links a')

for(let ativo of links){
    if(currentPage.includes(ativo.getAttribute('href'))){
        ativo.classList.add('ativo')
    }
}
