import React from "react";
import posed from "react-pose";

import gitIcon from "../images/github.png";

const Sidebar = posed.ul({
    open: {
      x: '0%',
      delayChildren: 200,
      staggerChildren: 50
    },
    closed: {  delay: 300 }
  });
  
  const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
  });

class Projects extends React.Component {

    state = {
        isOpen: false,
      }

    componentDidMount() {
        this.setState({isOpen: true});
        
    }

    render() {

        const {isOpen} = this.state;
        return(
            <div className="section projects">
                <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                    <Item className="project-item" >
                        
                            <h3>Interior Design Web App | Katie Lillback</h3>
                            <p>•	Devised a Web app for Katie Lillback’s interior design business with a team of 4.
                            </p>
                            <p>
                            •	Built using the following technologies: Scala Play, Slick, JQuery, and Twirl
                             </p>  
                             <a href="https://github.com/arthurfeeney/Interior-Design"><img src={gitIcon} className="project-item-git grow"/> </a>
                        
                    </Item>
                    <Item className="project-item" >
                        
                            <h3>React BLE Smart Bulb Controller </h3>
                            <p>•	Built a simple React.js web application for controlling a Bluetooth low energy (BLE) smart light.
                            </p>
                            <p>  •	The application took advantage of Chrome’s Web Bluetooth functionality to communicate with the device, and allows color control via a color picker once connected.
                            </p>
                            <a href="https://github.com/cluikart/BLE_Controller"><img src={gitIcon} className="project-item-git grow"/> </a>
                        
                    </Item>
                    <Item className="project-item" >
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </Item>
                    
                </Sidebar>    
            </div>    
        );
    }
}

export default Projects;