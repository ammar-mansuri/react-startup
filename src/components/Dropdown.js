import { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "../css/dropdown.css";

const Dropdown=({menuOptions,selected,onSelectionChange,inputLabel})=>{

    const [dropdownControl,setDropDownControl]=useState(false);
    const ref=useRef();
    
    useEffect(()=>{

        const bodyClicked=(event)=>{
            //Ref contains reference to the parent element in our component
            //Here we check if its click from component we return, otherwise we continue is click event is triggerred outside component
            if(ref.current.contains(event.target)){
                return;
            }
            setDropDownControl(false);
        }

        document.addEventListener('click',bodyClicked,{ capture: true })

        return(()=>{
            document.removeEventListener('click',bodyClicked,{ capture: true })
        });

    },[]);

    //console.log("Control: ",dropdownControl);
    const menuRender= menuOptions.map( item =>{
        if(item.value === selected.value){
            return null;
        }

        return (
            <div className="item" key={item.value} onClick={ () => onSelectionChange(item)}>{item.label}</div>
        );
    })
    

    return(
            <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{inputLabel}</label>
                <div onClick={() => setDropDownControl(!dropdownControl)} className={`ui selection dropdown ${ dropdownControl ? 'visible active' : ''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${ dropdownControl ? 'visible transition' : ''}`}>{menuRender}</div>
                </div>
            </div>
            {/* <div className={`dropLabel ${selected.value}`}>{selected.label}</div> */}
            </div>
            
    );
}



export default Dropdown;