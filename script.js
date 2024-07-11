    const leftbtn=document.querySelector('.scroll-left');
    const rightbtn=document.querySelector('.scroll-right');
    const slider=document.querySelector('.scrolling-wrapper');
    
    
    //Slide Event Listeners
    rightbtn.addEventListener('click',()=>{
        document.getElementById("scroll-right").style.display = "none"
        document.getElementById("scroll-left").style.display = "block"
            slider.scroll(800,0);
        
    })
    
    leftbtn.addEventListener('click',()=>{
        document.getElementById('scroll-left').style.display="none" 
        document.getElementById('scroll-right').style.display="block"   
        slider.scroll(0,0);
    })
    