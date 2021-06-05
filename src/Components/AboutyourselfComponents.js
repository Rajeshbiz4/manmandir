import React from 'react';

class AboutYourSelf extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (<div className="aboutdemo">
            <div className="container">
                <blockquote className="blockquoteabout" style={{ marginTop: '-1%' }}>
                    <h1>About Ourself :-</h1><br />
                    <p className="about"> We are into the Business of Customer Statisfaction and Continuously providing a Quality product to our Customers.
                    Our main motto is to provide a Superiorly made HomeTemples,Solely Designed for Home
                    which brings a Flow of Positive Energy and Creating a Peaceful Environment in the Home. We also make
                     the Temples based on your Given Requirement.</p>
                </blockquote>
            </div>
        </div>
        )
    }
}

export default AboutYourSelf;