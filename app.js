let imgs = ["https://i.pinimg.com/564x/0d/0d/4f/0d0d4f9ffd52c72baffb5f795e41d4ed.jpg", "https://i.pinimg.com/564x/75/5b/f4/755bf49973a5c627b97507ce5e70893f.jpg", "https://i.pinimg.com/564x/08/80/73/088073cca3c76dbd3d857135d974d6d7.jpg", "https://i.pinimg.com/564x/7c/53/d9/7c53d979df3c284bcac23755113ed4f0.jpg", "https://i.pinimg.com/564x/b1/7d/df/b17ddfcc6ebf18b40aab442bab69312c.jpg"]

function select(el) {
    return document.querySelector(el)
}
let add = "";
console.log(add);
imgs.forEach((img, index) => {
    add += ` <img src=${img} id=${index}>`
    console.log(add);
    select(".imgbox").innerHTML = add;
})

let imgbox = document.querySelectorAll(".imgbox img")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let count = 0;


function moveimg() {
    imgbox.forEach((img, index) => {
        if (index === count) {
            img.style.display = "block"
        } else {
            img.style.display = "none"
        }
    })

}
next.addEventListener("click", () => {
    count++
    if (count >= imgbox.length) {
        count = 0
    }
    moveimg()
})
prev.addEventListener("click", () => {
    count--;
    if (count < 0) {
        count = imgbox.length - 1
    }
    moveimg()
})




