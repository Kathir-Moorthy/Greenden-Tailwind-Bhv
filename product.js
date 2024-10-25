// Selecting sidenav and menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})

closenav.addEventListener("click",function(){
    sidenav.style.right = "-30%"
})

// Search Functionality

var productContainer = document.getElementById("productcontainer")
var search = document.getElementById("searchinput")

var prodList = productContainer.querySelectorAll("div");


search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();
    
    for (var count = 0; count < prodList.length; count++) {
        var prodNAme = prodList[count].querySelector("h1").textContent
        if (prodList[count].textContent.toUpperCase().indexOf(enteredValue) < 0) {
            prodList[count].style.display = "none";
        } else {
            prodList[count].style.display = "block";
        }
    }
});
