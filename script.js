// document.querySelector('.square').onclick = function(){

// }
document.querySelector('.logo').addEventListener("click", togglePanels)

document.querySelectorAll('.pane').forEach(function(elem){
  elem.addEventListener("click", toggleActive)
})


function toggleActive(e){
  console.log(e.target.classList.contains('active'))
  e.target.classList.contains('active') ?
    e.target.classList.remove('active') :
    e.target.classList.add('active')
}

function togglePanels(){
  if(document.querySelector('.p1').classList.contains('show')) {
    hidePanels()
  } else {
    showPanels()
  }
}

function showPanels() {
  toggleCloudsLanding()
  console.log('show')
  const elems = document.querySelectorAll(".p1, .p2, .p3, .p4")
    for (i = 0; i<elems.length; i++){
    elems[i].classList.add('show')
    }

}

function hidePanels(e) {
  console.log('hide')
  toggleCloudsLanding()
  const elems = document.querySelectorAll(".p1, .p2, .p3, .p4")
    for (i = 0; i<elems.length; i++){
    elems[i].classList.remove('show')
    }
}

function toggleCloudsLanding(){
  const elems = document.querySelectorAll(".landing-sect, .clouds")
  const headers = document.querySelectorAll('.header')
  if(document.querySelector('.landing-sect').style.display !== 'none'){
    for (i = 0; i<elems.length; i++){
    elems[i].style.display = 'none'
    }
    for (i = 0; i<headers.length; i++){
    headers[i].style.display = 'block'
    }
  } else {
    for (i = 0; i<elems.length; i++){
    elems[i].style.display = 'block'
    }
    for (i = 0; i<headers.length; i++){
    headers[i].style.display = 'none'
    }
  }
}


