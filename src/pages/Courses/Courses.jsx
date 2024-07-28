import React from 'react';
import './Courses.css';
import  { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import FaqAccordition from '../../components/FaqAccordition/FaqAccordition';

const courses = [
    {id: 1,
    img: [ArtCourseImg],
    title: 'Art Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 2,
    img: [BusinessCourseImg],
    title: 'Business Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 3,
    img: [ComputerScienceCourseImg],
    title: 'Computer Science Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 4,
    img: [EducationCourseImg],
    title: 'Education Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 5,
    img: [HealthcareCourseImg],
    title: 'Health Care Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 6,
    img: [SportCourseImg],
    title: 'Sport Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},
{id: 7,
    img: [LawCourseImg],
    title: 'Law Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},

{id: 8,
    img: [MusicCourseImg],
    title: 'Music Course',
    description: ' lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
},
];

    

function Courses(){
    return(
        <div className='courses-page'>
            <header className='height-75'>
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className='text-center fw-semibold'>Our Courses</h1>
                    <p className='text-center w-75 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laborum explicabo, deserunt, quaerat fuga nam, natus quam eum iure odit doloremque repudiandae officiis. Voluptatum maxime modi, facilis reprehenderit at fugit!</p>

                </div>
            </header>
            <div className="container py-5">
                <div className="row g-4">
                    {courses.map(course=>(
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img}/>
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>
                                        {course.title}
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        {course.description}
                                    </Card.Text>
                    
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-dark text-light py-5">
                <FaqAccordition />
                    
            </div>
        </div>
    )

}
export default Courses;