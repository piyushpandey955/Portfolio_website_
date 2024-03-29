//add event listener for hamburger
document.querySelector(".hamburger-icon").addEventListener("click",()=>{
  document.querySelector(".hamburger").style.right = "0";
  document.querySelector(".hamburger-icon").style.display="none";
})

//add eventlistener for close
document.querySelector(".close").addEventListener('click', () =>{
  document.querySelector('.hamburger').style.right='-200px';
  document.querySelector(".hamburger-icon").style.display="block";
})