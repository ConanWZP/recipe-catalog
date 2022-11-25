import React from 'react';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const LayoutForStore = () => {
    return (
        <div className={'wrapper'}>
            <div className={'main'}>

                <Header/>

                <div className={'container'}>
                    <div className={'content'}>
                        <Outlet/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LayoutForStore;