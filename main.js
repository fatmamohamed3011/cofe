let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counting");
let started = false;

window.onscroll=function(){
  if(window.scrollY >= section.offsetTop){
    if(!started){
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal){
      clearInterval (count)
    }
  },500 / goal);
}


const checkBox = document.getElementById('check')

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    const div = document.createElement('div')
    div.className = 'layout'
    document.body.appendChild(div)
  } else {
    if (document.querySelector('.layout')) {
      document.querySelector('.layout').remove()
    }
  }
})


window.addEventListener("scroll" , function(){
  let nav= document.querySelector(".main-nav");
  nav.classList.toggle("sticky" , window.scrollY>0);
})

let but = document.querySelector(".i-foot");
let pElement = document.querySelector(".js-p");

but.onclick = function(){
  pElement.innerHTML= ".....فاطمه التلت";
};

