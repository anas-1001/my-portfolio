import { Link } from "react-router";
import profileImg from "./assets/profile_img.jpg"
function Home(){

    return(
  
        <div className="home-style">
             <img src={profileImg} alt="profile" className="profile-img"/>
  <h2>Hi,I'm <span>Anas Ansari</span></h2>
  <p>Frontend Developer|HTML|CSS|Javascript|React</p>
    <Link to="/projects" className="btn">View my Work</Link>
        </div>
    )
}
export default Home;
