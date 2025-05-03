import { Box } from "@mui/material";
import { useState } from "react";
import tabla from "../components/tabs/tables/InverionsTable"
import  InversionsTab from "../components/tabs/InversionsTab";
import InversionsNavTab from  "../components/tabs/InversionsNavTab";
const Inversions = () => {

    const [currentRowInInversionsTab, setCurrentRowInInversionsTab] = useState(0);

    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("INVERSIONES");
    
    return (
        <Box>
            <InversionsNavTab
                currentRowInInversionsTab={setCurrentRowInInversionsTab} 
                setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab} 
            />
            {currentTabInPrincipalTab == "INVERSIONES" && <InversionsTab/>}
            
        </Box>
    );
};
export default Inversions;