import React from "react";
import ReactDOM from "react-dom";
import {Route, NavLink, HashRouter} from "react-router-dom";
import pose from "react-pose";

import Home from "./home";
import Projects from "./projects";
import Resume from "./resume";

const MenuHighlight = pose.div({
    // pressable: true,
    // init: { scale: 1 },
    // press: { scale: 0.8 }
    shift: {
        x: ({dx}) => dx,
        y: 0,
    },
    props: {dx: 0, dy: 20}
});



class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.homeRef = React.createRef();
        this.resumeRef = React.createRef();
        this.projectRef = React.createRef();
        this.getElemCoord = this.getElemCoord.bind(this);
        this.setHighlight = this.setHighlight.bind(this);
        this.state = {
            highlightX: 83,
            highlightY: 0,
            highlightW: 0,
            highlightH: 0,
            ref: null,
        }
    }

    componentDidMount() {
        this.setHighlight(this.homeRef.current);
    }

    componentDidUpdate() {
        // this.setHighlight(this.state.ref);
    }

    getElemCoord(ref)  {
        return ReactDOM.findDOMNode(ref)
        .getBoundingClientRect();
    };

    setHighlight(ref) {
        this.setState({ref: ref});
        const pos = this.getElemCoord(ref);
        this.setState({highlightX: pos.x-2.5, 
                        highlightY: pos.y+5,
                        highlightW: pos.width+5,
                        highlightH: pos.height+5
                });
    }

    render() {
        return(
            <div className="menu" >
                <MenuHighlight pose={"shift"} 
                dx={this.state.highlightX} 
                dy={this.state.highlightY}
                poseKey={this.state.highlightX}
                style={{width: this.state.highlightW, height: this.state.highlightH} }
                className="menu-highlight"/>
                
                <HashRouter>
                    <div>
                    <NavLink className="menu-item menu-home" to="/"  onClick={() => this.setHighlight(this.homeRef.current)}>
                        <span ref={this.homeRef} className="menu-item-div">Home</span>
                    </NavLink>
                    <NavLink className="menu-item menu-resume" to="/resume" onClick={() => this.setHighlight(this.resumeRef.current)}>
                        <span ref={this.resumeRef} className="menu-item-div">Resume</span>
                    </NavLink>  
                    <NavLink className="menu-item menu-projects" to="/projects" onClick={() => this.setHighlight(this.projectRef.current)}>
                        <span ref={this.projectRef} className="menu-item-div">Projects</span>
                    </NavLink> 
                    
                    <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>  
                    <Route path="/projects" component={Projects}/>  
                    </div> 
                    </div>
                </HashRouter>   

                

            </div>    
        );
    }
}

export default Menu;