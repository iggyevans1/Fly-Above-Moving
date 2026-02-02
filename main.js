function revealOnScroll(){
 document.querySelectorAll('.reveal').forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){el.classList.add('active')}
 })
}
window.addEventListener('scroll',revealOnScroll)
window.addEventListener('load',revealOnScroll)

let currentReview=0
const reviews=document.querySelectorAll('.review-card')
setInterval(()=>{
 reviews[currentReview].classList.remove('active')
 currentReview=(currentReview+1)%reviews.length
 reviews[currentReview].classList.add('active')
},5000)
