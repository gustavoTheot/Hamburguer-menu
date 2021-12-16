function Active(){
    let hamburguer = document.querySelector('.hamburguer')
    let exit = document.querySelector('.exit')
    let list = document.querySelector('.list')
    let opacity = document.querySelector('main')
    let activeClass = 'active'

    function handleClick(e){
        e.preventDefault();
        hamburguer.classList.toggle(activeClass)
        list.classList.toggle(activeClass)
        opacity.classList.toggle(activeClass)
    }

    hamburguer.addEventListener('click', handleClick)

    exit.addEventListener('click', handleClick)
}

Active()