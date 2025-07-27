let btn = document.querySelector("button")

btn.addEventListener('click',randomrgb)

let box=document.querySelector('.color-box')
// div.setAttribute("class",'box')

function randomrgb(){
 let r=Math.floor(Math.random()*256)
 let g=Math.floor(Math.random()*256)
 let b=Math.floor(Math.random()*256)
 box.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
 text.textContent = ` (${r}, ${g}, ${b}) `

}

let text = document.createElement("span")
// text.textContent =" RGB"
let h1 = document.querySelector('h1')
h1.appendChild(text)
let cpybtn = document.querySelector(".Cpy")
cpybtn.addEventListener('click',function(){
    navigator.clipboard.writeText(text.textContent)
    let h3 = document.createElement('h3');
    h3.textContent = "Copied!";
    h3.className = "copy-toast";
    document.body.append(h3);
    setTimeout(() => {
  h3.remove();
}, 2000); // disappears after 2 seconds

})

// 🌙 DARK MODE TOGGLE
const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener('change', () => {
  document.body.classList.toggle("dark");
});