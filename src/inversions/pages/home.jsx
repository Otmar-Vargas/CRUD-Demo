import { Outlet} from "react-router-dom";
import AppBar from "../../share/bars/components/InversionsAppBar";
export default function Home() {
    return (
       <div id='div-home'>
         <div id='div-appbar'>
	         <AppBar /> 
 	      </div>  
         <div id="detail"> 
            <Outlet /> 
         </div> 
      </div>  
    );
  }