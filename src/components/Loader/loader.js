import react from "react";


const Loader=(props)=>{
    return(
        
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">{ props.message}</div>
        </div>
    );
}

Loader.defaultProps={
    message:'Loading....'
};

export default Loader;