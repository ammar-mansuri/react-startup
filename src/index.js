import React from 'react';
import ReactDOM  from 'react-dom';
import CommentDetails from './commentDetials';
import faker from 'faker'
import ApprovalCard from './ApprovalCard';
import MessageComponent from './MessgaeComponent';
import Segment from './SegmentComponent';
import SeasonDisplay from './SeasonDisplay';
/*
const App = () => {
    return (
    <div className="ui container comments"> 
        <MessageComponent header="TU-CLAUSTHAL" text="MS-INFORMATIC"/>
        <ApprovalCard>
            <CommentDetails author="Ammar" timeAgo="Yesterday at 08:00" avatarImage={faker.image.avatar()} />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Talha" timeAgo="Yesterday at 15:00" avatarImage={faker.image.avatar()}/>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Zaid" timeAgo="Today at 19:00" avatarImage={faker.image.avatar()}/>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="XYZ" timeAgo="Today at 18:00" avatarImage={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
            Are you sure you want to QUIT ?
        </ApprovalCard>

        <Segment className="segment">
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                No documents are listed for this customer.
            </div>
            <div className="ui primary button">Add Document</div>
        </Segment>

        <Segment className="segment">
           <h4 className="ui header">For Your Information</h4>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
        </Segment>

        <SeasonDisplay/>
    </div>
    );
}
*/

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { lat : null, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
                positions => {
                    console.log(positions);
                    this.setState({ lat: positions.coords.latitude});
                },
                err => {
                    console.log(err)
                    this.setState({ errorMessage: err.message});
                }
            );
    }

    render(){

        if(this.state.lat && !this.state.errorMessage){
            return <div> Latitude: {this.state.lat} </div>
        }
        
        if(!this.state.lat && this.state.errorMessage){
            return <div> ERROR: {this.state.errorMessage} </div>
        }

        return <div> Loading, please wait.... </div>
        
    }
}

    
ReactDOM.render(<App/>,document.querySelector('#root'));