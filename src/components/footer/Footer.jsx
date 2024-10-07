import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className="footer">
    <div className="footer-container container">
        <div className="footer-box">
            <a href="#" className="logo">Dilek<span>Baler LLC</span></a>
            <div className="social">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>
                <a href="#"><i class='bx bxl-instagram'></i></a>
                <a href="#"><i class='bx bxl-youtube'></i></a>
            </div>
        </div>
        <div class="footer-box">
            <h3>Pages</h3>
            <a href="#">Home</a>
            <a href="#">Cars</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        
    </div>
 </section>
  )
}

export default Footer