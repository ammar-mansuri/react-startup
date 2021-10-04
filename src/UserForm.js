import react from "react";
import reactDom from "react-dom";

    class UserForm extends React.Component{

        render=()=>{
            return (
                <form>
                    <label>Enter a username:</label>
                    <input />
                </form>
            );
        }
        
    }
    // Renders the App component into a div with id 'root'
    ReactDOM.render(<UserForm />, document.querySelector('#root'));
