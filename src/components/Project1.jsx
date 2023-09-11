import React from 'react'
import './Project1.css'
import Project01 from '../Images/Project1.jpeg';

const Project1 = (props) => {

    const handleClick = () => {
        props.goBack(false);
    }

    return (
        <div>
            <section className='homesection' id='home'>
                <div className='myinfo container'>
                    <h1 className='myname'>PROJECT1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam placeat neque officia qui laboriosam iure corporis consequuntur deserunt delectus.</p>
                    <a className='button button1' href="#" target='_blank'>PROJECT LINK</a>
                </div>
            </section>
            <section className='projectinfo' >
                <div className='container'>
                    <div className='center'><img className='projectimg' src={Project01} alt="projectlogo" /></div>


                    <div className='projsections'>
                        <div className='projdivsection'>
                            <h1 className='projsubheading'>Overview</h1>
                            <p className='projinfo1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores labore voluptatum quis esse minus quae voluptates amet qui culpa.</p>
                            <p className='projinfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit veritatis nobis consequuntur fuga eaque et voluptatum. Unde voluptatum tempora omnis voluptas explicabo exercitationem ut ab, eum blanditiis consequuntur. Cumque ea earum maiores natus quam autem ipsum, illum rem explicabo unde harum illo! Dolor eius, reprehenderit temporibus ullam animi sunt! </p>
                        </div>
                        <div className='projdivsection'>
                            <h1 className='projsubheading'>Tech Used</h1>
                            <div className='skills'>
                                {['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Java', 'SpringBoot'].map((item, index) => <div key={index} className='singleskill'>{item}</div>)}

                            </div>

                            <div className='buttons'>
                                <a className='probutton' href="#" target='_blank'><span>PROJECT LINK</span></a>
                                <a href="#home" className='gobackbutton' onClick={handleClick}><span>GO BACK</span></a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project1