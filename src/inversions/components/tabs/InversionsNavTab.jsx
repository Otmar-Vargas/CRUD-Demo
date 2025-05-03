import { Box, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
const InversionsTabs = ["Inversiones", "Negocios"];

const InversionsNavTab = ({currentRowInInversionsTab, setCurrentNameTabInPrincipalTab}) => {
    const [currenTabIndex, setCurrentTabIndex] = useState(0);
    const handleChange = (e) => {
        console.log("Entro al handleChange", e.target.innerText.toUpperCase());
        setCurrentNameTabInPrincipalTab(e.target.innerText.toUpperCase());
        switch (e.target.innerText.toUpperCase()) {
            case "INVERSIONES":
                setCurrentTabIndex(0);
                break;
            case "NEGOCIOS":
                setCurrentTabIndex(1);
                break;
        };
    }
return (
        <Box sx={{ border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {InversionsTabs.map((tab) => {
                    return <Tab key={tab} label={tab} disabled= {currentRowInInversionsTab == null}/>;
                })}
            </Tabs>
        </Box>
    );
}
export default InversionsNavTab;