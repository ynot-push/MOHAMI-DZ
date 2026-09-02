import React from "react";
import './content2.css';
function Content2() {
  return (
      <div className="cards_container">
        <div className="side_container">
           <h1 className="title"> <span className="w1">PRACTICE</span> AREAS</h1>     
           <h2> The principale Practice Areas</h2>  
           </div>
        <div className="element_container"> 
              <div className="contain">
              <div className="carre"></div>
                 <div>
                 <a> Criminal defense</a>
                 <p>for individuals or entities facing accusations or charges in a criminal court.</p> 
                 </div>     
              </div>
              <div className="contain"> 
                 <div className="carre"></div>
                 <div>
                 <a> Family</a>
                 <p> for individuals navigating family law issues</p> 
                 </div>         
              </div>
              <div className="contain"> 
              <div className="carre"></div>
                 <div>
                 <a> Civil rights</a>
                 <p>for individuals' rights and liberties guaranteed by law.often addressing issues related to discrimination, equality, and constitutional rights.</p> 
                 </div>     
              </div>
              <div className="contain"> 
              <div className="carre"></div>
                 <div>
                 <a> Business</a>
                 <p>handling various legal matters such as contracts, employment issues, intellectual property.</p> 
                 </div>     
              </div>
              <div className="contain">  
              <div className="carre"></div>
                 <div>
                 <a> Car accident</a>
                 <p>legal matters related to motor vehicle collisions, including  insurance disputes, and liability issues.</p> 
                 </div>     
              </div>
              <div className="contain">  
              <div className="carre"></div>
                 <div>
                 <a> Government</a>
                 <p>legal matters pertaining to governmental entities, including administrative law</p> 
                 </div>     
              </div>
              <div className="contain"> 
              <div className="carre"></div>
                 <div>
                 <a> Employement</a>
                 <p>egal matters pertaining to the employer-employee relationship, including disputes, contracts</p> 
                 </div>     
              </div>
              <div className="contain"> 
              <div className="carre"></div>
                 <div>
                 <a> Immigration</a>
                 <p> legal matters related to immigration, including visas, residency, citizenship</p> 
                 </div>     
              </div>
        </div>
    </div>
  );
}

export default Content2;
