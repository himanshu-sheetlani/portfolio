console.log("hello")

alert("My portfolio is still under construction but still you can visit it...       ~Himanshu Sheetlani")

function modeChange(){
    let slider = document.querySelector("#tickBox");
    let bg= document.querySelector("body")
    let card= document.querySelectorAll(".card")
    
    if (slider.checked) {
        document.querySelector(":root").style.setProperty('--primary', "#e1684d");
        document.querySelector(":root").style.setProperty('--secondary', "#e1684d35");
        document.querySelector(":root").style.setProperty('--text', "#fff");
        document.querySelector(":root").style.setProperty('--primDark', "#ae3e25");
        bg.style.backgroundColor="var(--blackBg)";
        card.forEach(i => {
            i.style.backgroundColor="#232323"
        });
    }else{
        document.querySelector(":root").style.setProperty('--primary', "#4071f4");
        document.querySelector(":root").style.setProperty('--secondary', "#4071f435");
        document.querySelector(":root").style.setProperty('--text', "#000");
        document.querySelector(":root").style.setProperty('--primDark', "#3156bc");
        bg.style.backgroundColor="var(--tertiary)";
        card.forEach(i => {
            i.style.backgroundColor="#fff"
        });
    }
}

let certiCont= document.querySelectorAll(".flip-container")
for (let index=3; index<certiCont.length; index++){
    certiCont[index].style.display="none";
}

function more(){
    let button= document.querySelector(".button")
    if(certiCont[4].style.display=="none"){
        for (let index=3; index<certiCont.length; index++){
            certiCont[index].style.display="flex";
        }  
        button.innerHTML="<span></span><span></span>SEE LESS<i class='material-symbols-outlined'>keyboard_double_arrow_up</i>";
    }else{
        for (let index=3; index<certiCont.length; index++){
            certiCont[index].style.display="none";
        }
        button.innerHTML="<span></span><span></span>SEE ALL<i class='material-symbols-outlined'>keyboard_double_arrow_down</i>";
    }
}
