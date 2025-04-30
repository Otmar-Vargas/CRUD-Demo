import { RouterProvider } from "react-router-dom";
import InversionsRouter from "./navigation/NaviRoutesInversions";
import Footer from "./share/footer/components/footer";
export default function AppAllModules() {
    return (
        <>
            <div id='div-app'>
                <RouterProvider router={InversionsRouter} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </> 
    );
}