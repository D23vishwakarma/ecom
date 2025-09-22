let btn1=document.querySelectorAll(".product-card button");
let cart=document.querySelector("nav p");
let num=0;
btn1.forEach((el)=>{
    el.addEventListener("click",()=>{
        num++;
    cart.innerText=num;
})
})
const imgs1={
    one:"https://m.media-amazon.com/images/I/71xHyqBwdcL._SX3000_.jpg",
    two:"https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg",
    three:"https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg",
    four:"https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
    five:"https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"
}
let left=document.querySelector(".left");
let right=document.querySelector(".right");
let img=document.querySelector(".pic");
let arr=Object.keys(imgs1);
let count=0;
img.setAttribute("src","https://m.media-amazon.com/images/I/71xHyqBwdcL._SX3000_.jpg");
let leftslide=()=>{
    let currkey=arr[count];
    img.setAttribute("src",imgs[currkey])
    if(count==0){
        count=5;
    }
        count--;

}
let rightslide=()=>{
     if(count==5){
        count=0;
    }

        count++;
    let currkey=arr[count];
    img.setAttribute("src",imgs[currkey])
    
}
//setInterval(rightslide,5000);
left.addEventListener("click",leftslide);
right.addEventListener("click",rightslide);
const scrollAmount=1150;
let container=document.querySelector(".p-grid");
let lbtn=document.querySelector(".l");
let rbtn=document.querySelector(".r");
lbtn.addEventListener("click",()=>{
    container.scrollLeft-=scrollAmount;
})
rbtn.addEventListener("click",()=>{
    container.scrollLeft+=scrollAmount;
    lbtn.classList.add("li")
})
const scrollAmount1=1150;
let container1=document.querySelector(".p-grid1");
let lbtn1=document.querySelector(".l1");
let rbtn1=document.querySelector(".r1");
lbtn1.addEventListener("click",()=>{
    container1.scrollLeft-=scrollAmount1;
})
rbtn1.addEventListener("click",()=>{
    container1.scrollLeft+=scrollAmount1;
    lbtn1.classList.add("li")
})
let contain=document.querySelector(".cont");
let side=document.querySelector(".hel i");
let bar=document.querySelector(".sidebar");
side.addEventListener("click",()=>{
    bar.classList.add("side");
    contain.classList.add("onslide");
})
function remove(){
    bar.classList.remove("side");
    contain.classList.remove("onslide");
}