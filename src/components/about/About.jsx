import React from 'react'
import './About.css'
import aboutImage from '../../img/about2.jpg';
function About() {
  return (
    <>
    <section className="about container" id="about">
    <div className="about-img">
    <img src={aboutImage} alt="About Us" />
    </div>
   
    <div className="about-text">
        <span>About Us</span>
        <h2>The Best User Experience</h2>
        <p>Founded in 2024, <strong>Dilek Baler LLC</strong></p>
        <p>is a rapidly growing car rental company focused on customer satisfaction.Our extensive fleet offers options for every budget, catering to both daily and monthly rental needs. All of our vehicles undergo regular maintenance to ensure a safe and comfortable driving experience.</p>
        <p>Our Service Areas We currently offer services across Turkey, including major cities such as Istanbul, Ankara, Izmir, Antalya, and Bursa. For more information or to make a reservation, please contact us.</p>
        <a href="#" class="btn">Get More Information</a>
    </div>
    
</section>
    </>
  )
}

export default About