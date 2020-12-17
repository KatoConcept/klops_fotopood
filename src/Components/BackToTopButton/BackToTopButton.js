import React, { useState } from 'react';

function BackToTopButton() {
    const [backToTop, setBackToTop] = useState(false);

    const addBackToTop = () => {
      if (window.scrollY > 700) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    };
  
    function GoBackToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
      
    }
  
    window.addEventListener('scroll', addBackToTop);
  
  return (
    <div className={backToTop ? 'back-to-top-btn active' : 'back-to-top-btn'} onClick={GoBackToTop}><i class="fa fa-chevron-up"></i></div>
  );  
};

export default BackToTopButton;