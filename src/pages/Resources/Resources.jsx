import React from 'react';
import './Resources.css';
import { useEffect, useState } from 'react';


function Resources(){
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const submitImg = async (e) => {
      console.log(title, file);
  };
    return(
        <div className='project-page'>
            {/* header sectioon start */}
            <header className="height">
            <div className="project container d-flex flex-column  text-light">
            <h1 className='text-center fw-semibold'>Resources and Ideas</h1>
            </div>

          </header>
            <div className='pdf' >
            <form className='forms'>
                  <h4 className='text-center py-2'> Upload Your Pdf </h4>
                  <br />
                  <input type="text" 
                  className='form-control'
                   placeholder='Title'
                    required
                    onChange={(e) => setTitle(e.target.value)}/>

                  <input type="file" 
                  className='form-control' 
                  accept='application/pdf' 
                  required
                  onChange={(e) => setFile(e.target.files)}/>
                  
                </form>
                <button onClick={submitImg} type='submit' className='mt-2 btn btn-danger' >Submit</button>

            </div>
         </div>      
                 
            
    )

}
export default Resources;