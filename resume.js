import React from "react";
import posed from "react-pose";
import {Document, Page, pdfjs} from "react-pdf";
import pdf from "./Christopher_Luikart_Resume_July2019.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

class Resume extends React.Component {

    state = {
        file: pdf,
        numPages: null,
        isOpen: false,
      }

      componentDidMount() {
          this.setState({isOpen: true});
      }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

    render() {

        const {isOpen} = this.state;
        return(
            <div className="resume">

            <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                    <Item className="resume-item" >
                        <h2>Christopher Shea Luikart</h2>
                        <p>csluikart@gmail.com</p>
                        <p>AUSTIN, TX</p>
                        <p>512-632-4638</p>
                    </Item>    
                    <Item className="resume-item" >
                        <h2>Education</h2>
                        <p>Trinity University, San Antonio, TX, May 2019</p>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Cumulative GPA: 3.4 | Major GPA: 3.5</p>
                    </Item>  
                    <Item className="resume-item" >
                        <h2>Skills</h2>
                        <div><h3>Programming Languages </h3>Scala, R, C++, C#, and Python </div>
                        <div><h3>Operating Systems </h3>Windows 10, OS X, Linux</div>
                        <div><h3>Environments </h3>Eclipse, Microsoft Visual Studios 2015</div>
                        <div><h3>Database</h3> MySQL, Slick</div>
                        <div><h3>FrameWorks</h3>.NET, Play, React</div>
                        <div><h3>Applications</h3>Adobe Photoshop, Microsoft Office. </div>
                        <div><h3>Web</h3>HTML, CSS, JavaScript, jQuery, Twirl</div>
                    </Item> 
                    <Item className="resume-item" >
                        <h2>Work Experience</h2>
                        <div><h3>IT Technical Analyst | WellMed Medical Management/Optum </h3>
                        Served as IT Technical Analyst managing software, hardware, and networking tasks. </div>
                    </Item> 
                </Sidebar>
                {/* <Document className="resume-pdf" file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page width={350} height={600} pageNumber={1}/>
                </Document>     */}
            </div>    
        );
    }
}

export default Resume;