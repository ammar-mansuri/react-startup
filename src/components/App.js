import React from 'react';
import { useState } from 'react/cjs/react.development';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';

const items=[
{
    title:'What is React?',
    content:'React is Frontend development framework'
},
{
    title:'Why use React?',
    content:'React is favourite JS library among engineers'
},
{
    title:'How do you use React?',
    content: 'React is used by creating components'
}
]

const dropDownMenu=[
    {
        label:'Chicken Tikka',
        value:'red'
    },
     {
        label:'Biryani',
        value:'orange'
    },
     {
        label:'Mint Margaritta',
        value:'green'
    }
]

const App=()=>{
    
    const [selectedDropDown,setSelectedDropDown]=useState(dropDownMenu[0]);
    const [showDropDown,setShowDropDown]=useState(true);

    return(
        <div>
            {/* <Accordion items={items}/> */}

            {/* <Search/> */}
            <button onClick={()=> setShowDropDown(!showDropDown)}>Toggle Dropdown</button>
            {showDropDown?
                <Dropdown menuOptions={dropDownMenu} selected={selectedDropDown} onSelectionChange={setSelectedDropDown}/>
                : null
            }
            
        </div>
    );
    
}

export default App;