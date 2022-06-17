const article = document.getElementById("section");
const popup = document.getElementById("Popup");
const reset = document.getElementById("restart");

// function for counting clicks and showing the popup
let clicksCounter = 0;
const toOpen = () => {
    popup.classList.toggle("show");
    section.classList.toggle("background");
    
    clicksCounter +=1;                                                              //to add one click to the counter
    localStorage.setItem("numberOfClicks",clicksCounter);                           //to save numbers of clicks
    
    const area = document.getElementById("area");
    area.innerText = `You have clicked ${localStorage.getItem("numberOfClicks")} times to related button.`;

    if (localStorage.getItem("numberOfClicks") < 5){
        reset.classList.remove("active");
    } else {
        reset.classList.add("active");
    }
console.log(clicksCounter)
;
console.log(localStorage.getItem("numberOfClicks"));   
}  

const toClose = () => {
    popup.classList.remove("show");
    article.classList.remove("background");
}
 console.log(clicksCounter)


//function for restarting the counter
const toRestart = () => {
    let error = document.getElementById("error");
    console.log(`restart clicks: ${clicksCounter}`)
    if (localStorage.getItem("numberOfClicks") < 5){
        error.innerText = "Restart button available from 5 clicks";         //information for the user how the restart works
    } else {
        clicksCounter = 0;                                                  //to clear the counter
        localStorage.clear();                                               //to clear localStorage
        error.innerText = "";                                               //to clear error
        popup.classList.toggle("show");
        article.classList.toggle("background");
    }
}