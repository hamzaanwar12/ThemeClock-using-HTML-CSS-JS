let needle1 = document.getElementById("needle1")
let needle2 = document.getElementById("needle2")
let needle3 = document.getElementById("needle3")
let time = document.querySelector(".digitalInfo")
let button = document.querySelector("button")

let previousSeconds,previousMinutes=null,previousHours
let hours,minutes
let i=0;
let check = false,hourCheck = false

// needle3.style.transform = `rotate(0deg)`

console.log(needle1)
console.log(needle2)
console.log(needle3)
console.log(time)
console.log(button)

const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const month = ["January","February","March","April","May","June","July","August","September","October",
                "November","December"]


/*
let x = 0;
let y = 0;
let z = 0;

//  quite good for checking the rotaton of the needles

setInterval(() => {
    x+=6
    needle3.style.transform = `rotate(${x}deg)`

    if(x%360==0)
    {
        y+=6;
        needle2.style.transform = `rotate(${y}deg)`

        if(y%360==0)
        {
            z+=6;

            if(z%360==0)        
                needle1.style.transform = `rotate(${z}deg)`
        
        }
    }
}, 1000);

*/
let click = true

button.addEventListener("click",()=>
{
    let span = document.querySelector("span")
    let body = document.body
    let Whiteneedle1 = document.querySelector(".needle")
    let Whiteneedle2 = document.querySelectorAll(".needle")[1]
    
    console.log(Whiteneedle1)
    console.log(Whiteneedle2)
    span.classList.toggle("textColor")
    body.classList.toggle("black")
    Whiteneedle1.classList.toggle("white")
    Whiteneedle2.classList.toggle("white")
    button.classList.toggle("initialColor")
    button.classList.toggle("textColor")
    if(click)
    {
        button.textContent = "Light Mode"
        click = false
    }   
    else{
        button.textContent = "Dark Mode"
        click = true
    }
    
    

})

setInterval(() => {
    let dateObject = new Date()
    
    document.getElementById("day").textContent = day[dateObject.getDay()] + ", "
    document.getElementById("month").textContent  = month[ dateObject.getMonth()] +  " "
    document.getElementById("date").textContent  = dateObject.getDate()

    time.innerHTML = `<h1>${dateObject.getHours()} : ${dateObject.getMinutes()} ${dateObject.getHours()>=12?"PM":"AM"}</h1>`
    
    if(i==0)
    {
        previousSeconds  = dateObject.getSeconds()*6.11        
        i++
    } 
    else
        previousSeconds+=6
    

    
    if(previousMinutes==null) 
    {
        minutes = dateObject.getMinutes()
        previousMinutes = minutes*6.11
        minutesCheck = true
    }
    else 
    {
        let newMinutes = dateObject.getMinutes()
        if(newMinutes - minutes ==1)
        {
            minutes = newMinutes
            previousMinutes +=5
        }
    }
    
    if(previousHours==null)
    {
        hours = dateObject.getHours()
        previousHours = hours%12*30

    }
       
    else
    {
        let newHours = dateObject.getHours()
        if(newHours  - hours == 1)
        {
            hours = newHours
            previousHours+=30
        }
    }

    // if(Math.ceil(dateObject.getSeconds()*6.11)!=0)
    // if(Math.ceil(dateObject.getMinutes()*6.11)!=0)

        console.log(previousSeconds)
        console.log(previousMinutes)
        console.log(dateObject.getHours()%12*30)
        
    needle3.style.transform = `rotate(${previousSeconds}deg)`
    needle1.style.transform = `rotate(${previousMinutes}deg)`
    needle2.style.transform = `rotate(${previousHours}deg)`

    /*
        if (i == 0) 
    {
        previousSeconds = Math.floor(dateObject.getSeconds() * 6.11);
        previousMinutes = Math.floor(dateObject.getMinutes() * 6.11);
        previousHours = Math.floor(dateObject.getHours() * 30);
        ++i;
    }
    else {
        if (previousHours != Math.ceil(dateObject.getHours() * 30))
            previousHours += Math.ceil(dateObject.getHours() * 30)

        if (previousMinutes != Math.ceil(dateObject.getMinutes() * 6.11))
            previousMinutes += Math.ceil(dateObject.getMinutes() * 6.11)

        if (previousSeconds != Math.ceil(dateObject.getSeconds() * 6.11))
            previousSeconds += Math.ceil(dateObject.getSeconds() * 6.11)
    }

    console.log(previousHours)
    console.log(previousMinutes)
    console.log(previousSeconds)
    console.log(Math.floor(dateObject.getSeconds() * 6.11))
    console.log(Math.floor(dateObject.getMinutes() * 6.11))
    console.log(Math.floor(dateObject.getHours() * 6.11))
    console.log("what's going on")

    needle3.style.transform = `rotate(${previousSeconds}deg)`
    needle1.style.transform = `rotate(${previousMinutes}deg)`
    needle2.style.transform = `rotate(${previousHours}deg)` 
    */
}, 1000);
