window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  AOS.init();
    const navbarFixded = document.querySelector('.navbarFixded')
 
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
   navbarFixded.style.top="0px"
  } else {
  }


}


  

export default scrollFunction;