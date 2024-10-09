import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="contact-container">
        <div className="item">
            <div className="contact">
                <div className="first-text">Let's get in touch</div>
                 <div className="contact-sec">
                        <ul className="contact-infos">
                            <li><i class='bx bxs-envelope'></i> dilekbalerllc@gmail.com </li>
                            <li><i class='bx bxs-phone-call' ></i> +1 (786) 710-3038</li>
                            <li><i class='bx bxs-location-plus'></i> 7901 4th St N Ste 300 </li>
                            <li className='spacial-p'> St Petersburg, FL 33702</li>
                        </ul>
                    </div>
                <div className="social-links">
                    <span className="second-text">Connect with us</span>
                   
                    <ul className='social-media'>
                        <li> <a href="https://www.instagram.com/balercarrental/"><i class='bx bxl-instagram'></i></a> </li>
                    </ul>
                </div>
            </div>
            <div className="submit-form">
                <h4 className="third-text">Contact Us</h4>
                <form action="">
                    <div className="input-box">
                        <input type="text"  className='input'/>
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="input-box">
                        <input type="email"  className='input'/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="phone"  className='input'/>
                        <label htmlFor="">Phone</label>
                    </div>
                    <div className="input-box">
                        <textarea className='input' name="" id="message"></textarea>
                        <label htmlFor="">Message</label>
                    </div>
                    <input type="submit" className='btn-contact' value='Submit'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact