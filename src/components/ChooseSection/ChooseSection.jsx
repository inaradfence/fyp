import React from 'react';
import {Card} from 'react-bootstrap';

function ChooseSection(){
    return(
        <div>
             <div className='container'>
                <h2 className='text-center mb-5'>Why choose PU-SIP ?</h2>
                <div className='row g-4'>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                {/* Trophy */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-globe" viewBox="0 0 16 16">
                 <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>                    
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                 Centralized Communication Hub
                                </Card.Title>
                                <Card.Text className='text-center'>
                                PU-SIP serves as a unified platform where students can access a wealth of information and resources in one place. It streamlines communication, ensuring you stay informed and connected with the university community effortlessly.

                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                
                                {/* Smile */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                Enhanced Collaboration Opportunities                                </Card.Title>
                                <Card.Text className='text-center'>
                                Our platform facilitates easy collaboration among students, faculty, and staff. Whether you’re looking to join study groups, participate in discussions, or connect with student organizations, PU-SIP provides the tools and features to foster productive interactions and build meaningful connections.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                {/* Location */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-projector-fill" viewBox="0 0 16 16">
  <path d="M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
</svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                Access to Projects and Resources
                                </Card.Title>
                                <Card.Text className='text-center'>
                                PU-SIP centralizes access to a wide range of academic projects and resources. It facilitates seamless sharing and collaboration on projects with peers, making group work efficient. Additionally, PU-SIP helps you manage and organize resources effectively, ensuring you can quickly find and use what you need to stay focused on your academic goals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
            </div>   
         </div>
    )

}
export default  ChooseSection;