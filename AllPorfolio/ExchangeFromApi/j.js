 function callOurAPI(typeOfMoney = "EUR")
{
    fetch("https://api.exchangerate-api.com/v4/latest/" + typeOfMoney)
    .then(a=> a.json())
    .then(b =>  
        {
            draw(b)
            
        })
    .catch(err=>console.log(err))
}


// -------------- part 1 -------------------------- LEFT SIDE 

let stockedAPI = {}
let optionsLeft = document.querySelector(".options")
let optionsRight = document.querySelector(".options2")

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")



function draw(list)
{
    
    let listOfMoney = []
    optionsLeft.innerHTML = ""
    stockedAPI = list
    let i = 0
   for (const key in list.rates) {
       listOfMoney.push(key)
    //    console.log(list.rates[key])
       
   }
   for(let i =0;i<4;i++)
    {
    let btn = document.createElement("button")
    optionsLeft.appendChild(btn)
    btn.innerHTML+= listOfMoney[i]
    btn.setAttribute("data-money",listOfMoney[i])
    btn.id = `my${i}`

    
    btn.addEventListener("click",function(event)
    {
        let activate = document.querySelector(".activated1")
        activate.classList.remove("activated1")
        event.target.classList.add("activated1")
        callOurAPI(event.target.innerHTML)
        
        
    })

    if(i === 3)
    {
        let moreOptions = document.createElement("input")
        optionsLeft.appendChild(moreOptions)
        moreOptions.placeholder = "Write"
        moreOptions.style.textAlign = "center"
        moreOptions.setAttribute("data-money","moreOptions")
        moreOptions.id = "inpMoreOptions"

        let firstButton = document.querySelector("#my0")
        firstButton.classList.add("div")
        firstButton.className = "activated1"
    }  
    }

        
   

    inp1.addEventListener("input",function(e)
    {
        
        giveExchange(list)
        
    })

    let inpMoreOptions = document.querySelector("#inpMoreOptions")

    inpMoreOptions.addEventListener("input",function(event)
    {
       
        if(inpMoreOptions.value.length == 3)
        {
           for(const key in list.rates)
           {
            
            if(inpMoreOptions.value.toUpperCase() === key)
                {
                    
                    callOurAPI(inpMoreOptions.value)
                    console.log("he")
                    inpMoreOptions.value = ""
                }
           }
            
        }
       
    }
)
    

    giveExchange(list)
}


function giveExchange(list)
{

    let activatedClass1 = document.querySelector(".activated1")
    let activatedClass2 = document.querySelector(".activated2")

    value1 = inp1.value
    
    for(const key in list.rates)
    {
        value2 = list.rates[activatedClass2.innerHTML] * value1
        inp2.value = value2
    }
       
}

// -------------- part 2 -------------------------- RIGHT SIDE 

function callOurAPI2(typeOfMoney = "EUR")
{
    fetch("https://api.exchangerate-api.com/v4/latest/" + typeOfMoney)
    .then(a=> a.json())
    .then(b =>  
        {
            draw2(b)
            
        })
    .catch(err=>console.log(err))
}



function draw2(list)
{
    
    let listOfMoney = []
    optionsRight.innerHTML = ""
    let i = 0
   for (const key in list.rates) {
       listOfMoney.push(key)
    //    console.log(list.rates[key])
       
   }
   for(let i =0;i<4;i++)
    {
    let btn = document.createElement("button")
    optionsRight.appendChild(btn)
    btn.innerHTML+= listOfMoney[i]
    btn.id = `mo${i}`

    
    btn.addEventListener("click",function(event)
    {
        let activate = document.querySelector(".activated2")
        activate.classList.remove("activated2")
        event.target.classList.add("activated2")
        callOurAPI2(event.target.innerHTML)
        
        
    })

    if(i === 3)
    {
        let moreOptions = document.createElement("input")
        optionsRight.appendChild(moreOptions)
        moreOptions.placeholder = "Write"
        moreOptions.style.textAlign = "center"
        moreOptions.setAttribute("data-money","moreOptions2")
        moreOptions.id = "inpMoreOptions2"


     
        


        let firstButton = document.querySelector("#mo0")
        firstButton.classList.add("div")
        firstButton.className = "activated2"
    }  
    }

        
   

    inp2.addEventListener("input",function(e)
    {
        
        giveExchange2(list)
        
    })
    


    let inpMoreOptions = document.querySelector("#inpMoreOptions2")

    inpMoreOptions.addEventListener("input",function(event)
    {
       
        if(inpMoreOptions.value.length == 3)
        {
           for(const key in list.rates)
           {
            
            if(inpMoreOptions.value.toUpperCase() === key)
                {
                    
                    callOurAPI2(inpMoreOptions.value)
                    console.log("he")
                    inpMoreOptions.value = ""
                }
           }
            
        }
       
    }
    )


    giveExchange2(list)
}


function giveExchange2(list)
{

    let activatedClass1 = document.querySelector(".activated1")
    let activatedClass2 = document.querySelector(".activated2")

    value2 = inp2.value
    
    for(const key in list.rates)
    {
        value1 = list.rates[activatedClass1.innerHTML] * value2
        inp1.value = value1
    }
       
}
callOurAPI()
callOurAPI2()




