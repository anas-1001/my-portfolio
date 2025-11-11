
import profileImg from "./assets/profile_img.jpg"
function About() {

    return (

        <div className="about">
            <img src={profileImg} alt="profile" className="profile-img2" />

            <h2>About Me</h2>
            <p>I'm a passionate beginner web designer who loves building clean,
                responsive websites.I enjoy learning new technologies and creating
                projects that solve real problems.
            </p>
        </div>
    )
}
export default About;