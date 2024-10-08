import React from 'react'
import { FiDownload } from 'react-icons/fi'

import ProfileImage from '../../assets/images/1234.png'
import CVFile from '../../assets/files/vigneshl_resume.pdf'

import './About.css'

const AboutMe = () =>{
    const statisticInfo = [
      {
        years:"01+",
        content:"Years experience"
      },
      {
        years:"05+",
        content:"Github projects"
      }
     
    ]
    return (
      <div className="AboutMe" id="AboutMe">
        <div className="Title">
          <h1>About Me</h1>
          <h2>Short Description</h2>
        </div>
        <div className="AboutmeConteiner">
          <div className="Conteiner-1">
            <div className="AboutText">
            
              <p>Young Software Developer, 
                  with an extensive level of knowledge and 
                  some experience time, working with web 
                  technologies and information technologies 
                  and telecommunications, delivering quality 
                  work.
              </p>
            </div>
            <div className="AboutStatistic">
              <ul>
                {statisticInfo.map((item, i) =>
                  <li key={i}>
                    <h1>{item.years}</h1>
                    <p>{item.content}</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="CVDownloader">
                <a download="" href={CVFile}>
                  Download CV
                  <FiDownload  className="DownloadIcon"/>
                </a>
            </div>
            <div id="ImagesConteiner">
              <img src={ProfileImage} 
                   alt="profile" 
                   className="AboutmeImage"
              />
            </div>
            </div>
        </div>
      </div>
    )
}

export default AboutMe