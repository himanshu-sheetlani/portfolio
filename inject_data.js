import data from './data.json' with {type:'json'};

let cert_list=''
let skills=''

for (let i=0; i<data.certificate.length; i++){
    cert_list=cert_list+
        `<div class="flip-container">
            <div class="flip-inner-container">
                <div class="flip-front">
                    <img src="${data.certificate[i].image}">
                    <h6>${data.certificate[i].title}</h6>
                    <div class="platform"><img src="${data.certificate[i].platform_logo}"> <h3>${data.certificate[i].platform_name}</h3></div>
                </div>
                <div class="flip-back">
                    <h2>Skills: <br> ${data.certificate[i].skill}</h2>
                    <p style="margin: 0 40px; text-align: justify;">${data.certificate[i].description}</p>
                    <h4>Issued On: <br>${data.certificate[i].issued_on}</h4>
                    <div class="circle">
                        <a href="${data.certificate[i].URL}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>`
}
certificates.innerHTML=cert_list

let certiCont= document.querySelectorAll(".flip-container")
for (let index=3; index<certiCont.length; index++){
    certiCont[index].style.display="none";
}

for (let i=0; i<data.skills.length; i++){
    skills=skills+
    `<div class="clearfix">    
        <li><div class="popover">${data.skills[i].name}</div><p><img src="${data.skills[i].img}" alt="${data.skills[i].name}"></p></li>
    </div>`
}

document.querySelector('#techStack ul').innerHTML=skills
let project=
    `<div class="cardProject">
        <div class="img">
            <img src="${data.project[0].img}" alt="">
        </div>
        <div class="details">
            <h2>${data.project[0].title}</h2>
            <p>${data.project[0].description}</p>
            <div class="links">
                <a class="resume" href="${data.project[0].live}" target="_blank">View Live&nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
                <a class="resume" href="${data.project[0].github}" target="_blank">View Code &nbsp; <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="projectCardDublicate">`

for (let i=1; i<data.project.length; i++){
    project=project+
    `<div class="cardProject">
        <div class="img">
            <img src="${data.project[i].img}" alt="">
        </div>
        <div class="details">
            <h2>${data.project[i].title}</h2>
            <p>${data.project[i].description}</p>
            <div class="links">
                <a class="resume" href="${data.project[i].live}" target="_blank">View Live&nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
                <a class="resume" href="${data.project[i].github}" target="_blank">View Code &nbsp; <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>`
}
project=project+'</div>'

document.querySelector('.projectCard').innerHTML=project