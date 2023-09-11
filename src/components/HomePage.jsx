import React from 'react'
import './HomePage.css'
import { useState } from 'react'
import Project01 from '../Images/Project1.jpeg';
import Project02 from '../Images/Project2.jpeg';
import Project03 from '../Images/Project3.jpeg';
import ContactForm from './ContactForm'
import Project1 from './Project1'

import { BsLinkedin } from 'react-icons/bs'
import { FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'

const HomePage = () => {


    const [project, setProject] = useState(false);

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)


    const handleProject = () => {
        setProject(true);
    }
    const handleHome = (value) => {
        closeMenu();
        setProject(value);
    }




    return (
        <div className='hp-border'>
            <nav className='hp-navbar'>
                <div className='hp-navcontent container'>
                    <a className='hp-logo' href="#home"  onClick={() => handleHome(false)}>TF</a>


                    <div className='hp-hamburger' onClick={handleClick}>
                        {click ? (<FaTimes className='hamburgericons' size={30} />)
                            : (<FaBars className='hamburgericons' size={30} />)}

                    </div>
                    <ul className={click ? "hp-nav-menu  active" : "hp-nav-menu"}>
                        <li><a className='hp-nav-item' href="#home" onClick={() => handleHome(false)}>Home</a></li>
                        <li><a className='hp-nav-item' href="#about" onClick={() => handleHome(false)}>About</a></li>
                        <li><a className='hp-nav-item' href="#projects" onClick={() => handleHome(false)}>Projects</a></li>
                        <li><a className='hp-nav-item' href="#contact" onClick={() => handleHome(false)}>Contact</a></li>
                    </ul>

                </div>
            </nav>

            {/* ////////////////////////////////HOMESECTION////////////////////////////// */}

            {project && <div>
                <Project1 goBack={handleHome} />
            </div>}

            {!project && <div>
                <section id='home' className='hp-homesection'>
                    <div className='hp-myinfo'>
                        <h1 className='hp-myname'>HEY, I'M "YOUR NAME"</h1>
                        <p className='hp-shortnote'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis eius obcaecati nulla sequi modi?</p>
                        <div className='hp-homesocials'>
                            <div className='hp-socialresponsive '>
                                <div className='hp-footersocials'>
                                    <a href="#" target='_blank' rel="noopener noreferrer " title="linkedin"><BsLinkedin size={25} className='hp-footericons' /></a>
                                    <a href="#" target='_blank' rel="noopener noreferrer " title="twitter"><FaTwitter size={25} className='hp-footericons' /></a>
                                    <a href="#" target='_blank' rel="noopener noreferrer " title="mail"><FiMail size={25} className='hp-footericons' /></a>
                                    <a href="#" target='_blank' rel="noopener noreferrer " title="github"><BsGithub size={25} className='hp-footericons' /></a>
                                </div>
                            </div>
                        </div>
                        <a className='button button1' href="#projects">PROJECTS</a>
                    </div>
                    <div className='hp-socials'>
                        <a href="#" target='_blank' rel="noopener noreferrer " title="linkedin"><BsLinkedin size={30} className='socialicons' /></a>
                        <a href="#" target='_blank' rel="noopener noreferrer" title="Twitter"><FaTwitter size={30} className='socialicons' /></a>
                        <a href="#" target='_blank' rel="noopener noreferrer" title="Mail"><FiMail size={30} className='socialicons' /></a>
                        <a href="#" target='_blank' rel="noopener noreferrer" title="github"><BsGithub size={30} className='socialicons' /></a>
                    </div>
                </section>

                {/* ////////////////////////////////ABOUTSECTION////////////////////////////// */}


                <section className='hp-aboutme' id='about'>
                    <div className='container'>
                        <div className='hp-headline'>
                            <h1>ABOUT ME</h1>
                            <hr className='hp-hrline' />
                        </div>
                        <div className='hp-sections'>
                            <div className='hp-divsection'>
                                <h1 className='hp-subheading'>Get to know me!</h1>
                                <p className='hp-info'>Hello! I'm <span>"YOUR NAME"</span>,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit unde sed alias obcaecati est mollitia et quaerat voluptatum consequuntur magnam possimus iusto eius ab labore sequi, suscipit perspiciatis doloribus reprehenderit soluta dignissimos voluptates esse ea. Rem voluptates.</p>
                                <br />
                                <p className='hp-info'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then click below and fill out the form or you can find my socials and phone number to contact me.</p>
                                <a className='button' href="#contactme"><span>CONTACT</span></a>
                            </div>
                            <div className='hp-divsection'>
                                <h1 className='hp-subheading'>My Skills</h1>
                                <div className='hp-skills'>
                                    {['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map((item, index) => <div key={index} className='hp-singleskill'>{item}</div>)}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ////////////////////////////////PROJECTSECTION 01////////////////////////////// */}

                <section className='hp-project' id='projects'>
                    <div className='container'>
                        <div className='hp-headline'>
                            <h1>PROJECTS</h1>
                            <hr className='hp-hrline' />
                        </div>
                        <div className='hp-projectsections'>
                            <div className='hp-projectsubsection devicepadding'>
                                <img className='hp-projectimg' src={Project01} alt="Project1" />
                            </div>
                            <div className='hp-projectsubsection'>
                                <h1 className='hp-projectheading'>Project01</h1>
                                <br />
                                <p className='hp-projectinfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sed sint praesentium ad voluptates porro? ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <a href="#home" className='button' onClick={handleProject}><span>Know More</span></a>
                            </div>
                        </div>
                        <div className='hp-projectsections'>
                            <div className='hp-projectsubsection devicepadding'>
                                <img className='hp-projectimg' src={Project02} alt="Project1" />
                            </div>
                            <div className='hp-projectsubsection'>
                                <h1 className='hp-projectheading'>Project02</h1>
                                <br />
                                <p className='hp-projectinfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa eos tenetur iure, aspernatur laborum? ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <a href="#home" className='button' onClick={handleProject}><span>Know More</span></a>
                            </div>
                        </div>
                        <h1 className='hp-projectheading2'>Project Section 02</h1>
                        <div className='hp-projectsection2'>
                            <div className='hp-projectsubsection2'>
                                <img className='hp-projectsection2images' src={Project01} alt="Project1" />
                                <div className='txtbtn'>
                                    <h1 className='hp-projname'>PROJECT 1</h1>
                                    <a className='projbutton' href="#">Know More</a>
                                </div>
                            </div>
                            <div className='hp-projectsubsection2'>
                                <img className='hp-projectsection2images' src={Project02} alt="Project1" />
                                <div className='txtbtn'>
                                    <h1 className='hp-projname'>PROJECT 1</h1>
                                    <a className='projbutton' href="#">Know More</a>
                                </div>
                            </div>
                            <div className='hp-projectsubsection2'>
                                <img className='hp-projectsection2images' src={Project03} alt="Project1" />
                                <div className='txtbtn'>
                                    <h1 className='hp-projname'>PROJECT 1</h1>
                                    <a className='projbutton' href="#">Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ////////////////////////////////CONTACTSECTION////////////////////////////// */}


                <section className='hp-contact backgroungimage' id='contact'>
                    <div className='container'>
                        <div className='hp-headline'>
                            <h1>CONTACT</h1>
                            <hr className='hp-hrline' />
                        </div>
                        <div className='hp-contentsection hp-devicepadding'>
                            <p className='hp-contactsub'>Feel free to Contact me by submitting the form and I will get back to you as soon as possible</p>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>}




            {/* ////////////////////////////////FOOTERSECTION////////////////////////////// */}

            <section className='hp-footer'>
                <div className='container'>
                    <div className='hp-footersections'>
                        <div className='hp-subsection '>
                            <h1 className='hp-footerheadings'>"YOUR NAME"</h1>
                            <p className='hp-footersubgeading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum odit non similique.</p>
                        </div>
                        <div className='hp-rightsubsection'>
                            <h1 className='hp-footerheadings'>SOCIALS</h1>
                            <div className='hp-footersocials'>
                                <a href="#" target='_blank' rel="noopener noreferrer " title="linkedin"><BsLinkedin size={25} className='footericons' /></a>
                                <a href="#" target='_blank' rel="noopener noreferrer " title="twitter"><FaTwitter size={25} className='footericons' /></a>
                                <a href="#" target='_blank' rel="noopener noreferrer " title="mail"><FiMail size={25} className='footericons' /></a>
                                <a href="#" target='_blank' rel="noopener noreferrer " title="github"><BsGithub size={25} className='footericons' /></a>
                            </div>

                        </div>
                    </div>
                    <hr id='hp-footerline' />
                    <div class="hp-main-footer">
                        © Copyright
                        <script>document.write(new Date().getFullYear())</script>2023. Made by
                        <a className='hp-cplink' rel="noreferrer" target="_blank" href="https://ronyb.me"> Rohan Barikar</a>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default HomePage