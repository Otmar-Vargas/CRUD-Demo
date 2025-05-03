import { Outlet} from "react-router-dom";
import AppBar from "../../share/bars/components/InversionsAppBar";
import NavBat from "./Inversions";
export default function Home() {
    return (
       <div id='div-home'>
         <div id='div-appbar'>
	         <AppBar /> 
 	      </div>  
         <div id='div-navbar'>
            <NavBat/>
         </div>
            
            
         <div id="detail"> 
            <Outlet /> 
         </div> 
      </div>  
    );
  }