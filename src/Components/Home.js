import React, { Component } from 'react'
import firebase from '../Configurations/FbConfig';

const db=firebase.firestore();

class Home extends Component {

state = {
    contactData:[]
}

componentDidMount(){
    db.collection('Contacts').get().then(data=>{
        data.docs.forEach(doc=>{
            this.setState({
                contactData:[...this.state.contactData,doc.data()]
            })
        })
    })
}

    render() {
        return (
            <div>
                <h1>Contact Information</h1>
                {this.state.contactData.length?(
                    this.state.contactData.map(item=>{
                        return(
                            <div>
                                <p>{item.Name}</p>
                                <p>{item.Address}</p>
                                <p>{item.Phone}</p>
                            </div>
                        )
                    })
                ):(
                    <p>Loading.....</p>
                )}
            </div>
        )
    }
}

export default Home; 
