import data from './data.json' with {type:'json'};

let cert_list=''
let skills=''

//certificates

for (let i=0; i<data.certificate.length; i++){
    cert_list=cert_list+
        `<div class="flip-container">
            <div class="flip-inner-container">
                <div class="flip-front">
                    <img src="${data.certificate[i].image}" alt="${data.certificate[i].title}">
                    <h6>${data.certificate[i].title}</h6>
                    <div class="platform"><img src="${data.certificate[i].platform_logo}" alt="${data.certificate[i].platform_name}"> <h3>${data.certificate[i].platform_name}</h3></div>
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

let certiCont= document.querySelectorAll("#certificates .flip-container")
for (let index=3; index<certiCont.length; index++){
    certiCont[index].style.display="none";
}

//hackathons
let hackathon_list=''
if (data.hackathon) {
    for (let i=0; i<data.hackathon.length; i++){
        hackathon_list +=
            `<div class="hackathon-card">
                <img class="main-img" src="${data.hackathon[i].image}" alt="${data.hackathon[i].title}">
                <div class="card-header">
                    <h2>${data.hackathon[i].title}</h2>
                    ${data.hackathon[i].tag ? `<div class="winner-tag">🏆 ${data.hackathon[i].tag}</div>` : ''}
                </div>
                <div class="platform"><img src="${data.hackathon[i].platform_logo}" alt="${data.hackathon[i].platform_name}"> <h3>${data.hackathon[i].platform_name}</h3></div>
                <p>${data.hackathon[i].description}</p>
                <div class="issued-on">Date: ${data.hackathon[i].issued_on}</div>
            </div>`
    }
    document.querySelector('#hackathon-list').innerHTML=hackathon_list
}

//skills
for (let i=0; i<data.skills.length; i++){
    skills=skills+
    `<div class="clearfix">    
        <li><div class="popover">${data.skills[i].name}</div><p><img src="${data.skills[i].img}" alt="${data.skills[i].name}"></p></li>
    </div>`
}

document.querySelector('#techStack ul').innerHTML=skills

//projects
let project=
    `<div class="cardProject">
        <div class="img">
            <img src="${data.project[0].img}" alt="${data.project[0].title}">
        </div>
        <div class="details">
            <h2>${data.project[0].title}</h2>
            <p>${data.project[0].description}</p>
            <div class="links">
                <a class="blue-button" href="${data.project[0].live}" target="_blank">View Live&nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
                <a class="blue-button" href="${data.project[0].github}" target="_blank">View Code &nbsp; <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="projectCardDublicate">`

for (let i=1; i<data.project.length; i++){
    project=project+
    `<div class="cardProject">
        <div class="img">
            <img src="${data.project[i].img}" alt="${data.project[i].title}">
        </div>
        <div class="details">
            <h2>${data.project[i].title}</h2>
            <p>${data.project[i].description}</p>
            <div class="links">
                <a class="blue-button" href="${data.project[i].live}" target="_blank">View Live&nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
                <a class="blue-button" href="${data.project[i].github}" target="_blank">View Code &nbsp; <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>`
}
project=project+'</div>'
document.querySelector('.projectCard').innerHTML=project;

//resume link
document.querySelectorAll(".resume").forEach(el => {
  el.href = data.resume_link;
});

console.log(document.querySelectorAll(".resume"), data.resume_link);