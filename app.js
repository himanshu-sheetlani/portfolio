console.log("hello")


var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },   
    setupEventListeners: function() {
        var self = this;
        
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();


// alert("My portfolio is still under construction but still you can visit it...       ~Himanshu Sheetlani")

function modeChange(){
    let slider = document.querySelector("#tickBox");
    let bg= document.querySelector("body")
    let card= document.querySelectorAll(".card")
    
    if (slider.checked) {
        document.querySelector(":root").style.setProperty('--primary', "#e1684d");
        document.querySelector(":root").style.setProperty('--secondary', "#e1684d35");
        document.querySelector(":root").style.setProperty('--text', "#fff");
        document.querySelector(":root").style.setProperty('--primDark', "#ae3e25");
        document.querySelector(":root").style.setProperty('--whitebg', "#232323");
        document.querySelector(":root").style.setProperty('--transparent', "rgba(0, 0, 0, 0.15)");
        bg.style.backgroundColor="var(--blackBg)";
        document.querySelector(".formBox img").src="./assets/contact_Dark.svg"
        card.forEach(i => {
            i.style.backgroundColor="#232323"
        });
    }else{
        document.querySelector(":root").style.setProperty('--primary', "#4071f4");
        document.querySelector(":root").style.setProperty('--secondary', "#4071f435");
        document.querySelector(":root").style.setProperty('--text', "#000");
        document.querySelector(":root").style.setProperty('--primDark', "#3156bc");
        document.querySelector(":root").style.setProperty('--whitebg', "rgb(235, 235, 235)");
        document.querySelector(":root").style.setProperty('--transparent', "rgba(255, 255, 255, 0.15)");
        bg.style.backgroundColor="var(--tertiary)";
        document.querySelector(".formBox img").src="./assets/contact.svg"
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

function blurEmail(email){
    // alert("blur");
    // let email= document.querySelector(".i2").value;
    if (!(email.value.includes("@") && email.value.includes("."))) {
        document.querySelector("#emailLabel").classList.add('labelUp')
        email.classList.add("invalid")
    }
}
