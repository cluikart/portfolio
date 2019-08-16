import React from "react";
import pose from "react-pose";
import SplitText from "react-pose-text";
import { rgba } from "style-value-types";

const charPoses = {
    draggable: true,
    exit: {"text-shadow":"1px 1px 1px rgba(117,33,48,0), 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(255,255,255,0)",},
    enter: {
         
        "text-shadow": "2px 2px 1px rgba(117,33,48,1), 5px 5px 5px rgba(0,0,0,0.9), -1px -1px 1px rgba(255,255,255,0.3) ",
        delay: ({charIndex}) => charIndex * 50
     }
} 

class Home extends React.Component {
    render() {
        return(
            <div className="home-wrapper">
            <div className="home">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className="home-name">Shea</SplitText>
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className="home-name home-name-last">Luikart</SplitText>
            </div>   
            </div> 
        );
    }
}

export default Home;