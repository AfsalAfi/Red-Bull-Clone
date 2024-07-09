
// let slideNumber=1;
// const images=2;

//Make left scroll hide
// const hide=()=>{
    //     var button = document.getElementById('scroll-left');
    //     button.style.display = 'none';
    // }
    
    // const display=()=>{
        //     var button = document.getElementById('scroll-left');
        //     button.style.display = 'block';
        // }
        
        
        
        // Slide Arrow funtions
        // const nextSlide=()=>{
            //     slider.style.transform=`translateX(-${slideNumber*310}px)`;
            //     slideNumber++;
            //     slideNumber===1 ?hide():display();
            // }
            
// const prevSlide=()=>{
    //     slider.style.transform=`translateX(-${(slideNumber-2)*310}px)`;
    //     slideNumber--;
    //     slideNumber===1 ?hide():display();
    // }



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
    
    