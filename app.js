console.log("hello")
function modeChange(){
    var body = document.body;
    let slider = document.querySelector("#tickBox");
    let name= document.querySelector("#name"); 
    let hello = document.querySelector("#hello");
    let designation= document.querySelector("#designation");
    let shape= document.querySelector(".shape");
    let nav= document.querySelector("#nav");
    let resume= document.querySelectorAll(".resume");
    let text= document.querySelectorAll(".color");
    let bottom= document.querySelector("#bottom");
    let about= document.querySelector("#about")
    let sectionText= document.querySelector(".sectionText")
    let heading= document.querySelector(".heading")

    if (slider.checked) {
        body.style.backgroundColor="var(--blackBg)";
        name.style.color="var(--white)"
        hello.style.color="var(--white)"
        designation.style.color="var(--orange)"
        shape.style.backgroundColor="var(--orange)"
        nav.style.backgroundColor="var(--blackBg)"
        bottom.style.backgroundColor="var(--orange)"
        about.style.backgroundColor="var(--lightOrange)"
        sectionText.style.color="var(--white)"
        heading.style.color="var(--orange)"
        for (let index=0 ; index < resume.length; index++) {
            resume[index].style.backgroundColor="var(--orange)"
        }
        for (let index=0 ; index < text.length; index++) {
            text[index].style.color="var(--white)"
        }


    }else {
        body.style.backgroundColor="var(--white)";
        name.style.color="var(--black)"
        hello.style.color="var(--black)"
        designation.style.color="var(--blue)"
        shape.style.backgroundColor="var(--blue)"
        nav.style.backgroundColor="var(--white)"
        bottom.style.backgroundColor="var(--blue)"
        about.style.backgroundColor="var(--lightBlue)"
        sectionText.style.color="var(--back)"
        heading.style.color="var(--blue)"
        for (let index=0 ; index < resume.length; index++) {
            resume[index].style.backgroundColor="var(--blue)"
        }
        for (let index=0 ; index < text.length; index++) {
            text[index].style.color="var(--black)"
        }
        
    }
}