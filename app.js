console.log("hello")

// alert("this portfolio is still under construction but still you can visit it...       ~Himanshu Sheetlani")

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
    let c1= document.querySelector("#c1")
    let c2= document.querySelector("#c2")
    let highlight= document.querySelectorAll(".highlight")
    let popover= document.querySelectorAll(".popover")
    let popoverBefore=  document.querySelectorAll(".popover::before")
    let certificate= document.querySelectorAll(".flip-front")
    let certiBack= document.querySelectorAll(".flip-back")

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
        c1.style.backgroundColor="var(--orange)"
        c2.style.backgroundColor="var(--lightOrange)"
        // highlight.style.background="var(--orange)"
        for (let index=0 ; index < resume.length; index++) {
            resume[index].style.backgroundColor="var(--orange)"
        }
        for (let index=0 ; index < text.length; index++) {
            text[index].style.color="var(--white)"
        }
        for (let index=0 ; index < highlight.length; index++) {
            highlight[index].style.color="var(--orange)"
        }
        for (let index=0 ; index < popover.length; index++) {
            popover[index].style.backgroundColor="var(--orange)"
        }
        for (let index=0 ; index < popoverBefore.length; index++) {
            popoverBefore[index].style.backgroundColor="var(--orange)"
        }
        for (let index=0 ; index < certificate.length; index++) {
            certificate[index].style.backgroundColor="var(--orange)"
        }
        for (let index=0 ; index < certiBack.length; index++) {
            certiBack[index].style.backgroundColor="var(--orange)"
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
        c1.style.backgroundColor="var(--blue)"
        c2.style.backgroundColor="var(--lightBlue)"
        for (let index=0 ; index < resume.length; index++) {
            resume[index].style.backgroundColor="var(--blue)"
        }
        for (let index=0 ; index < text.length; index++) {
            text[index].style.color="var(--black)"
        }
        for (let index=0 ; index < highlight.length; index++) {
            highlight[index].style.color="var(--blue)"
        }
        for (let index=0 ; index < popover.length; index++) {
            popover[index].style.backgroundColor="var(--blue)"
        }
        for (let index=0 ; index < certificate.length; index++) {
            certificate[index].style.backgroundColor="var(--blue)"
        }
        for (let index=0 ; index < certiBack.length; index++) {
            certiBack[index].style.backgroundColor="var(--blue)"
        }
        
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