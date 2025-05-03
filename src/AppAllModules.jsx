import { RouterProvider } from "react-router-dom";
import InversionsRouter from "./navigation/NaviRoutesInversions";
import Footer from "./share/footer/components/footer";


import { GET_DATA_START } from "./inversions/redux/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function AppAllModules() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_DATA_START()).then(() => {
            console.log('<<END-DISPATCH>>: ', ' GET_DATA_START se ejecuto de forma correcta');
        })
    }, []);


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