let hamburger=document.querySelector('.burger')
let navbar=document.querySelector('.navbar')
let header=document.getElementsByTagName('header')[0]

hamburger.addEventListener('click',(e)=>{   
    hamburger.classList.toggle('active')
    header.classList.toggle('change')
})

 document.querySelectorAll('.navbar li').forEach(n => {
    hamburger.classList.remove('active')
    header.classList.remove('change')
 })
