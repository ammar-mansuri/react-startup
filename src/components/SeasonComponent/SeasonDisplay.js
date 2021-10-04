import '../../css/SeasonDisplay.css'
import React from 'react'

const season={
    Summer:{
        seasonText:"Oh, Its Super hot",
        seasonIcon:"sun"
    },
    Winter:{
        seasonText:"Its chilly out there",
        seasonIcon:"snowflake"
    }
}
const getSeasons = (latitude,month)=>{

        if(month>2 && month<9){
            return latitude>0 ? 'Summer':'Winter'
        }else{
            return latitude>0 ? 'Winter':'Summer'
        }
}

const SeasonDisplay = (props) =>{

    const currentSeason=getSeasons(props.lat,new Date().getMonth())
    console.log("Position inside seasons display: "+props.lat);
    
    const {seasonText,seasonIcon}=season[currentSeason];

    return(
        <div className={`seson-display ${currentSeason}`}> 
        <i className={`icon-left massive ${seasonIcon} icon`}/>
        <h1>{seasonText}</h1>
        <i className={`icon-right massive ${seasonIcon} icon`}/>
        </div>    
    );
};

export default SeasonDisplay;