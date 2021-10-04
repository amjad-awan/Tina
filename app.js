const slidBtn1 = document.querySelector(".btn1");
const slidBtn2 = document.querySelector(".btn2");
const formArea = document.querySelector(".form-area");
const formArea2 = document.querySelector(".form-area2")
const firstForm = document.querySelector(".first-form")
const secForm = document.querySelector(".sec-form");


slidBtn1.addEventListener("click", function(){
    formArea.classList.remove("form-area-transform");
    formArea2.classList.remove("form-area2-transform");
slidBtn2.classList.remove("click");
slidBtn1.classList.add("click");

})




slidBtn2.addEventListener("click", function(){
    formArea.classList.add("form-area-transform");
    formArea2.classList.add("form-area2-transform");
    slidBtn1.classList.remove("click");
slidBtn2.classList.add("click");
})