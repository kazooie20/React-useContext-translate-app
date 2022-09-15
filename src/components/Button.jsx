import LanguageContext from "../contexts/LanguageContext";
import React from "react";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {

    renderButton(color){
        return (
            <button className={`px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-${color}-500 rounded-md hover:bg-${color}-600 focus:bg-${color}-600 focus:outline-none sm:mx-2`}>
                    <LanguageContext.Consumer>
                        {({language}) => language === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
        )
    }

    render() {
        //console.log(this.context);
        const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )

    }


}

export default Button;