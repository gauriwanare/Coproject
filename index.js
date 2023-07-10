const container=document.getElementsByClassName("icon-container");
container.addEventListner("mousein",()=>{
    console.log("hovered")
    document.getElementsByClassName("settings-container").style.display="flex";
});