import React from "react";
import './footer.css';
function Footer(){
    return(
      
           <div className="containerjj">
               <div className="subcontainer1">
                   <h3> Popular Location</h3>
                   <ul>
                       <li><a>Agiers lawyers</a></li>
                       <li><a>Constantine Lawyers</a></li> 
                       <li><a>Annaba Lawyers</a></li>
                       <li><a>Oran Lawyers</a></li>
                       <li><a>Bejaia Lawyers</a></li>
                       <li><a>jijel Lawyers</a></li>
                       <li><a>Adrar Lawyers</a></li>
                   </ul>
                   <p>
                      © Mohami dz inc. all rights Reserved 2024
                    </p>
           
               </div>
               <div className="subcontainer2">
                   <h3> Popular Practice area</h3>
                   <ul>
                       <li><a>Criminal defence</a></li>
                       <li><a>Car accident </a></li> 
                       <li><a>Business</a></li>
                       <li><a>Family</a></li>
                       <li><a>employement</a></li>
                       <li><a>Immigration</a></li>
                       <li><a>Civil rights</a></li>

                   </ul>
               </div>
           </div>
        
      
    );
}
export  default Footer;