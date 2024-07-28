import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
// import Person7 from '../../utils/image/person7.jpg';

const persons=[
    {
        id:1,
        img:[Person1],
    },
    {
        id:2,
        img:[Person2],
    },
    {
        id:3,
        img:[Person3],
    },
    {
        id:4,
        img:[Person4],
    },
    {
        id:5,
        img:[Person5],
    },
    {
        id:6,
        img:[Person6],
    }, 
  
]

function About(){
    return(
        <div className='about-page'>
            {/* header sectioon start */}
            <header className="height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laborum explicabo, deserunt, quaerat fuga nam, natus quam eum iure odit doloremque repudiandae officiis. Voluptatum maxime modi, facilis reprehenderit at fugit!</p>
                    
            </div>
            </header> 
            {/* header section end */}
            {/* body of about page start */}
            <div className="container my5">
                {/* adjusting in row */}
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0 ">
                        <h2 className='mb-4 mb-lg-5'>Study With Us</h2>
                        <p className='mb-4 mb-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius tempora? Culpa ipsa totam molestias consequuntur distinctio. Consequuntur soluta atque distinctio quibusdam magni! Fugit minus adipisci alias eveniet dignissimos rem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit rem, qui esse sequi animi fugit, possimus nisi accusamus ratione aliquid eligendi inventore nostrum ullam illum cumque exercitationem ab corporis?</p> 
                        <p className='mb-4 mb-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius tempora? Culpa ipsa totam molestias consequuntur distinctio. Consequuntur soluta atque distinctio quibusdam magni! Fugit minus adipisci alias eveniet dignissimos rem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit rem, qui esse sequi animi fugit, possimus nisi accusamus ratione aliquid eligendi inventore nostrum ullam illum cumque exercitationem ab corporis?</p> 
                    <Link to="/contact">
                    <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 '>Contact US</button>
                    </Link>       
                    </div>
                    {/* paragraph section end */}
                    {/* infront of paragraph adding picture */}
                    <div className="col-lg-6 d-flex justify-content-center"> 
                        <img src={AboutSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
                {/* row sectionends here */}
                {/* acessing choosesection component  */}
                <div className='bg-dark text-light py-5'>
                    <ChooseSection/>
                </div>
                {/* accessing persons object */}
                <div className="bg-body-tertiary py-5">
                    <div className="container">
                        <h2 className='text-center  mb-5'>Our winners</h2>
                        <div className="row g-4">
                            {persons.map((person)=>(
                                <div key={person.id} className='col-md-4'>
                                    <img src={person.img} className='img-fluid' alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* person object acess denied here */}
            </div>
            </div>
    
    )

}
export default About;