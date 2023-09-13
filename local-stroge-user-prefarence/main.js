const font = document.querySelector("#font");
const background = document.querySelector("#background");
const button = document.querySelector("button");
const main = document.querySelector("main");



const setValu = (lsFont, lsBg) =>{
    font.value = lsFont;
    background.value = lsBg;


    main.style.fontSize = lsFont;
    main.style.backgroundColor = lsBg
}

const loadLocalStorage = () => {
   const lsFont= localStorage.getItem("fontSize");
   const lsBg = localStorage.getItem("background");


   if( lsFont  && lsBg ){
    setValu(lsFont,lsBg)
   }
   if( !lsFont  && !lsBg ){
    setValu("16px", "#c591f5")


   }
   if( !lsFont  && lsBg ){
    setValu("16px" , lsBg)
   }
   if( lsFont  && !lsBg ){
    setValu(lsFont , "#c591f5")
   }

}


font.addEventListener("change", (e)=>{
    const sFontSize = e.target.value;
    main.style.fontSize =sFontSize ;
    localStorage.setItem("fontSize" , sFontSize );
})

background.addEventListener("change", (e)=>{
    const sBackground = e.target.value;
    main.style.backgroundColor = sBackground;
    localStorage.setItem("background", sBackground)
})

button.addEventListener("click", (e)=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("background");
    setValu("16px" , "#c591f5")

})

loadLocalStorage()
