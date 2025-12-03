import { Link, useNavigate } from "react-router";
import profileImg from "./assets/profile_img.jpg";
import { Button } from 'react-bootstrap'
function Home() {

    const Navigate = useNavigate()

    const goToWork = () => {
        Navigate("/projects")

    }


    return (
        <>

            <div className="home-style" >
               
                <div >
                    <img src={profileImg} alt="profile" className="profile-img" />
                    <h2 className="title">Hi,I'm <span>Anas Ansari</span></h2>
                    <p>Frontend Developer</p>
                    

                    <div style={{ display: 'flex', gap: "20px" }}>
                        <Button variant="primary" size="lg" onClick={goToWork}>View my Work</Button>

                        <Button variant="primary" size="lg" href="https://drive.google.com/file/d/14UaNouTm_ntmFzD9ZPyG9JiHIQNPnQAA/view?usp=drive_link" target='_blank'>View my Resume</Button></div>
                    
                </div> 
                
            </div>
        </>
    )
}
export default Home;
