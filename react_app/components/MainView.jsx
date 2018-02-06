import React from 'react';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import TopStats from './home-view/TopStats.jsx';
class MainView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <section className='ui container'>
                    <TopBar
                        name={this.props.name}
                    />
                </section>
                <section className='ui container main-container'>
                    <TopStats/>
                </section>
            </div>
        )
    }
}

export default MainView;