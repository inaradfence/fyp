import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-dark'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>                    
                    <h1 className='text-center fw-semibold'>Punjab University Students Interaction Portal (PU-SIP)</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odit, id quidem eaque nam quibusdam praesentium expedita numquam consectetur nobis, ex voluptatum quasi animi dignissimos impedit iste aliquid, eveniet sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nisi nesciunt maxime voluptate quidem officiis veniam amet, error quasi nostrum ab, modi consequuntur aperiam mollitia. Eligendi iure laborum optio tempora!
                    </p>                
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                        <button type='button' className='btn btn-outline-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Our Course </button>
                        </Link>
                        <Link to="/contact">
                        <button type='button' className='btn btn-outline-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Contact Us </button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )

}
export default Home;