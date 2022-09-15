import React, {useState} from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCreate from "./UserCreate";
import {LanguageStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

const TranslatePage = () => {

   

    return (
        <section className="w-full min-h-screen bg-white dark:bg-gray-900">
            <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">

                <section className="flex items-center flex-1">
                    <div className="flex flex-col w-full ">
                    <LanguageStore>
                        <LanguageSelector />

                        
                            <ColorContext.Provider value='pink'>
                                <UserCreate />
                            </ColorContext.Provider>
                       
                        </LanguageStore>

                        

                        

                        <p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :)</p>
                    </div>
                </section>

                <Footer />
            </div>
        </section>

    )
}

export default TranslatePage;