import React, {FC} from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const LayoutForOutlet: FC = () => {
    return (
        <div className={'wrapper'}>
            <div className={'main'}>

                <Header/>

                <div className={'container'}>
                    <div className={'content'}>
                        <Navbar/>
                        <Outlet/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LayoutForOutlet;