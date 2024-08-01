import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
// import FaqAccordition from '../../components/FaqAccordition/FaqAccordition';
// import { Card } from 'react-bootstrap';

// Login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create a JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        'your_jwt_secret', // Use a secret key from environment variables
        { expiresIn: '1h' } // Token expiration
      );
  
      // Respond with token and user data
      res.json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
function Home(){
    return(
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='pt-5'>Welcome To</h2>                    
                    <h1 className='text-center fw-semibold'>Punjab University Students Interaction Portal (PU-SIP)</h1>
                    <p className='text-align-center px-5 py-2'>
                 Here, we strive to foster a vibrant and connected campus community by providing a seamless platform for students to engage, collaborate, and share their academic and extracurricular experiences. Whether you’re looking to join student clubs, find study groups, access important announcements, or connect with peers and faculty, our portal offers a user-friendly space to enhance your university life. Dive in to explore resources, participate in discussions, and stay updated with everything Punjab University has to offer. Together, let’s make the most of our time here and build lasting connections.                    </p>                
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Our Course </button>
                        </Link>
                        <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Contact Us </button>
                        </Link>
                    </div>
                </div>
            </header>
            <div className='py-5'>
                <ChooseSection/>
            </div>
            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className="text-capitalize">2024 start courses</h2>
                            <p> As we step into 2024, PU is excited to announce the launch of our new course offerings designed to meet the evolving needs of our community. This year, we're expanding our curriculum with innovative programs and cutting-edge content, aimed at equipping you with the skills and knowledge necessary for personal and professional growth. Whether you're looking to advance your career, explore new interests, or deepen your expertise, PU 2024 courses are here to support and inspire your journey. Join us as we embark on a new year of learning and discovery!</p>
                            <Link to="/courses">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More
                            </button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0 '>
                            <img src={StartCoursesImg} className='img-fluit' alt='' />
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="py-5">
                <FaqAccordition/>
            </div> */}

        </div>
    )

}
export default Home;