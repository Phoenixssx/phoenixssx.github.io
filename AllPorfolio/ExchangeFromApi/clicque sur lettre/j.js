let gl = document.querySelector(".global")
for(let i = 0;i<10;i++)
{
    let a = document.createElement("a")
    gl.appendChild(a)
    a.innerHTML = `Hey ${i}`

    a.addEventListener("click",function(event)
    {
        event.target.style.color = "red"
    })

}

let allB = document.querySelectorAll("#b")

allB.forEach(function(element) {
  element.addEventListener("click", function(e) {
    element.target.style.color = "yellow"
  })
})
