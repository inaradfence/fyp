import React from 'react';
import './AffiliatedColleges.css';
import {Link} from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

function AffaliatedColleges(){
    return(
        <div className='affiliatedcolleges-page'>
            {/* header sectioon start */}
            <header className="height height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className='text-center fw-semibold'>Affiliated Colleges</h1>
                    <p className='text-center pt-3 w-75 mb-5'>Explore the Affiliated Colleges section of the Punjab University Students Interaction Portal to easily access detailed information about the colleges affiliated with Punjab University. This page provides a direct link to the official Punjab University website, where you can find comprehensive profiles of each affiliated college, including their academic programs, faculty, campus facilities, and admission procedures. Whether you're a current student, prospective student, or just seeking more information, this resource is designed to offer valuable insights and updates about our diverse academic community. Click below to visit the official Punjab University site and learn more about the opportunities available at our affiliated institutions.</p>

                    <Link to="https://pu.edu.pk/affiliation">
                    <button type='button' className='list btn btn-danger btn-lg mx-0 mx-sm-2  '>List of Affiliated Colleges</button>
                    </Link>   
                    
            </div>
            
            </header> 
            {/* header section end */}
            {/* body of about page start */}             
                   
                                    
                
                {/* row sectionends here */}
                {/* acessing choosesection component  */}
                <div className='bg-dark text-light py-5'>
                    <ChooseSection/>
                </div>

      </div>  
                 
                 
            
    )

}
export default AffaliatedColleges;