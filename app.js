const slidBtn1 = document.querySelector(".btn1");
const slidBtn2 = document.querySelector(".btn2");
const formArea = document.querySelector(".form-area");
const formArea2 = document.querySelector(".form-area2")
const firstForm = document.querySelector(".first-form")
const secForm = document.querySelector(".sec-form")

slidBtn1.addEventListener("click", function(){
slidBtn2.classList.remove("click");
slidBtn1.classList.add("click");
formArea2.classList.remove("normal-display");
    secForm.innerHTML=firstForm.innerHTML;
})

/*slidBtn2.addEventListener("click", function(){
    formArea2.classList.add("form-area2-normal");
})*/


slidBtn2.addEventListener("click", function(){
    formArea2.style.display="block";
    //formArea2[2].style.display="none";
    firstForm.innerHTML=secForm.innerHTML;
    //secForm.innerHTML="";
    slidBtn1.classList.remove("click");
slidBtn2.classList.add("click");
})







