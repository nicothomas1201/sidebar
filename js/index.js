const $icon = document.querySelector('.header i')
const $navItem = document.querySelectorAll('.nav-item')
const $sidebar = document.querySelector('.sidebar')
const $header = document.querySelector('.header')
const $subheader = document.querySelector('.subheader')

function setClass($el, remove , add){
  $el.classList.remove(remove)
  $el.classList.add(add)
}



$icon.addEventListener('click', handleClickIcon)
function handleClickIcon(){
  if($sidebar.classList.item(1) === 'close') {
    setClass($sidebar, 'close', 'open')
    setClass($header, 'close', 'open')
    setClass($subheader, 'close', 'open')

    $navItem.forEach(item => {
      setClass(item, 'close', 'open')
    })

    
  }
  else{
    setClass($sidebar, 'open', 'close')
    setClass($header, 'open', 'close')
    setClass($subheader, 'open', 'close')

    $navItem.forEach(item => {
      setClass(item, 'open', 'close')
    })
  }

  
}


