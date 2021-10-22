import react from "react";
import { useState } from "react/cjs/react.development";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const dropDownMenu=[
    {
        label:'Pakistani',
        value:'urd'
    },
     {
        label:'German',
        value:'de'
    },
     {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Dutch',
        value:'nl'
    }
]

const Translate=()=>{

    const [language,setLanguage]=useState(dropDownMenu[0]);
    const [userInput,setUserInput]=useState("");

    return(

        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter any text to translate</label>
                    <input value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                </div>
            </div>
            <Dropdown menuOptions={dropDownMenu} selected={language} onSelectionChange={setLanguage} inputLabel="Select a language"/>
        
            <hr/>

            <h3 className="ui header">Translated text:</h3>
            <Convert userInput={userInput} language={language}/>
        
        </div>
        
        
    );


}

export default Translate;