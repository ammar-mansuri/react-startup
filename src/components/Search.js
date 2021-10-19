import {useState, useEffect} from "react";
import axios from "axios";

const Search=()=>{

    const [searchTerm, setSearchTerm]=useState('');
    const [wikiResult, setWikiResult]=useState([]);
    const [searchDeBounced, setSearchDeBounced]=useState('');
    
    useEffect(()=>{

        console.log("Inside Search Term useEffect");
        const timerId=setTimeout(() => {
            setSearchDeBounced(searchTerm);
        }, 500);

        return(()=>{
            clearTimeout(timerId);
        })
    },[searchTerm]);


    useEffect(()=>{

        console.log("Inside Debounced Term useEffect");
        const searchData = async () => { 
        const { data }= await axios.get('https://en.wikipedia.org/w/api.php',{
         params:{
             action:'query',
             list:'search',
             origin:'*',
             format:'json',
             srsearch:searchDeBounced
            }
        })
        setWikiResult(data.query.search);
        }
        if(searchDeBounced){
            searchData(); 
        }
        
    },[searchDeBounced]);

    const renderedItems= wikiResult.map( result => {

        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} rel="noreferrer" target="_blank" className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html : result.snippet}}/>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term: </label>
                    <input value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value)} placeholder="Enter any keyword.." />
                </div>
            </div>
            <div className="ui celled list">
                {renderedItems}
            </div>
        </div>
    );
}

export default Search;