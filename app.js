let users = [
    {
        profilepic: 'https://images.unsplash.com/photo-1645994743395-83d4b809c321?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        msgnum: '4',
        displaypic: "https://images.unsplash.com/photo-1622804136680-46dc2a8f0598?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "delhi,india",
        name: 'harshita',
        age: "21",
        bio: "GSAP is a JavaScript library for building high-performance animations that work in **every** major browser.",
    },

    {
        profilepic: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        msgnum: '9',
        displaypic: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "jaipur,india",
        name: 'poonam',
        age: "22",
        bio: "GSAP is a JavaScript library for building high-performance animations that work in **every** major browser.",
    },

    {
        profilepic: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        msgnum: '1',
        displaypic: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "alwar,india",
        name: 'genu',
        age: "22",
        bio: "GSAP is a JavaScript library for building high-performance animations that work in **every** major browser.",
    },

]

let curr = 0;

function select(el) {
    return document.querySelector(el)
}
function displayimg(params) {
    select(".maincard img").src = users[curr].displaypic
    select(".upcomingcard img").src = users[curr + 1].displaypic

    select(".profile img").src = users[curr].profilepic

    select(".msgnum p").innerText = users[curr].msgnum

    select(".loc h5").innerText = users[curr].location

    select(".name h1").innerText = users[curr].name
    select(".name h2").innerText = users[curr].age

    select(".bio h6").innerText = users[curr].bio
}
displayimg()

function imgChange() {
  let tl = gsap.timeline({
      onComplete: function(){
        let mainCard = select(".maincard")
        let upcomingcard = select(".upcomingcard")

        mainCard.classList.add("z-index: 1")
        mainCard.classList.add(".upcomingcard")
        mainCard.classList.remove(".maincard")
        mainCard.classList.add("z-index: 2")
        upcomingcard.classList.remove(".upcomingcard")
        upcomingcard.classList.add(".maincard")
        
        gsap.set(".maincard",{
            scale:1,
            opacity:1
        })
      }
  })

  tl.to(".maincard",{
    scale: 1.1,
    opacity:0,
    ease: Circ,
    duration:0.9
  },"a")
  tl.frome(".upcomingcard",{
      scale: 0.7,
      opacity:0,
      else: Circ,
      duration:0.5
  },"a")
    
}

let closebtn = document.querySelector(".close")
closebtn.addEventListener("click",()=>{
    imgChange()
})