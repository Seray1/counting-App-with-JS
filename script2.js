let count = 0
let incrementButton = document.getElementById("increment-btn") 
let result = document.getElementById("count-el")
let div = document.getElementsByTagName("div");
const fail = document.createElement("h3");
const insect = document.createTextNode("No count yet!");
fail.appendChild(insect);
let saveEl =document.getElementById("save-el")

function increment() {
    count +=  1
    result.textContent =count
   

}

function decountResult() {
    count -= 1
    result.textContent = count
}
function clearResult(){
    if (result.textContent >  0)
     {
        count = 0
        result.textContent = 0
        console.log("true")
    } else{
        console.log("false")
        result.appendChild(fail);
    }
    
}

function save() {
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let data = count + "" + "-" 
    // 3. Render the variable in the saveEl using innerText
     saveEl.textContent += data
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    if (result.textContent >  0)
    {
       count = 0
       result.textContent = 0
        console.log("true")}
}




// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById("welcome-el")
// const myName = "seray" ;
// const greeting = " you dey try Abeg!"
// console.log(welcomeEl)
 
// welcomeEl.innerText = myName + greeting

// // welcomeEl.innerText = welcomeEl.innerText + " you did it "
// welcomeEl.innerText += " you did it again"