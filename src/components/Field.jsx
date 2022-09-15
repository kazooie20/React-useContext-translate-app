import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    static contextType = LanguageContext;
    render () {
        return (
            <input 
            id={this.props.id} 
            type={this.props.type} 
            className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" 
            placeholder={this.context.language === 'english' ? 'Name' : 'Naam'}
            autoComplete='Off' 
    
            />
        )

    }
    
}
export default Field;