import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {

    return (
        
        <>

<div style={{display:"flex"}}>
 <div>
            <Card style={{  margin: "40px 20px 0 20px", boxShadow: " 0 2px 10px rgba(0,0,0,0.1)" }}>
                <Card.Body>
                    <Card.Title>My First Website</Card.Title>
                    <Card.Text>
                        A responsive gym website made with HTML and CSS and Bootstrap.
                    </Card.Text>
                    <Button variant="primary" href='https://anas-1001.github.io/bootstrap-project/' target='_blank'>View on Github</Button>
                </Card.Body>
            </Card></div>
            <div>
            <Card style={{margin: "40px 20px 0 20px", boxShadow: " 0 2px 10px rgba(0,0,0,0.1)" }}>
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                        Weather app built using React and OpenWeather API with real-time search and clean UI.
                                </Card.Text>
                    <Button variant="primary" href='https://anas-1001.github.io/weather-app/' target='_blank'>View on Github</Button>
                </Card.Body>
            </Card></div>
            <div>
            <Card style={{ margin: "40px 20px 0 20px", boxShadow: " 0 2px 10px rgba(0,0,0,0.1)" }}>
                <Card.Body>
                    <Card.Title>React Project</Card.Title>
                    <Card.Text>
                        A personal portfolio built using React + Vite and React Router.        </Card.Text>
                    <Button variant="primary" href='https://anas-1001.github.io/my-portfolio/' target='_blank'>View on Github</Button>
                </Card.Body>
            </Card></div>
</div>
        </>
    )
}
export default Projects;