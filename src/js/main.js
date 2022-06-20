const overlay = document.getElementById("overlay");
const popup = document.getElementById("Popup");
const reset = document.getElementById("restart");

// function for counting clicks and showing the pop up
let clicksCounter = 0;
const toOpen = (event) => {
    event.stopPropagation();
    popup.classList.toggle("show");
    overlay.classList.toggle("overlay");
    
    clicksCounter +=1;                                                              //to add one click to the counter
    localStorage.setItem("numberOfClicks",clicksCounter);                           //to save the number of clicks
    
    const area = document.getElementById("area");
    area.innerText = `You have clicked ${localStorage.getItem("numberOfClicks")} times to related button.`;

    if (localStorage.getItem("numberOfClicks") < 5){
        reset.classList.remove("active");
    } else {
        reset.classList.add("active");
    }  
}  

//function to close the pop up
const toClose = (event) => {
    event.stopPropagation();
    if(popup.classList.contains("show")){
        popup.classList.toggle("show");
        overlay.classList.toggle("overlay");
    }
}

//function for restarting the counter
const toRestart = () => {
    let error = document.getElementById("error");
    console.log(`restart clicks: ${clicksCounter}`)
    if (localStorage.getItem("numberOfClicks") < 5){
        error.innerText = "Restart button is available for 5 clicks and more";         //information for the user how the restart button works
    } else {
        clicksCounter = 0;                                                             //to clear the counter
        localStorage.clear();                                                          //to clear localStorage
        error.innerText = "";                                                          //to clear error
        popup.classList.toggle("show");
        overlay.classList.toggle("overlay");
    }
}