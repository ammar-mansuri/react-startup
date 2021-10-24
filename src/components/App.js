import React from 'react';
import { useState } from 'react/cjs/react.development';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Router from './Router';
import Search from './Search';
import Translate from './Translate';
import Header from './Header';

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

export default ()=>{
    const [selectedDropDown,setSelectedDropDown]=useState(dropDownMenu[0]);
    return(
        <div>
            <Header/>
            <Router path="/">
                <Accordion items={items}/>
            </Router>

            <Router path="/search">
                <Search/>
            </Router>

            <Router path="/dropdown">
                <Dropdown menuOptions={dropDownMenu} selected={selectedDropDown} onSelectionChange={setSelectedDropDown} inputLabel="Select an Item"/>
            </Router>

            <Router path="/translate">
                <Translate/>
            </Router>
        </div>
    );
}