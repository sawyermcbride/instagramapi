import React from 'react';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import HomeView from './HomeView.jsx';
import InboxView from './InboxView.jsx';
import StatsView from './StatsView.jsx';

class MainView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    
    render() {
        
        let View = null;
        
        switch(this.props.activePage) {
            case 1:
                View = <HomeView />
            break;
            case 2:
                View = <InboxView />;
            break;
            case 3:
                View = <StatsView />;
        }
        
        console.log("home render");
        console.log(View);
        return (
            <div>
                <section className='ui container'>
                    <TopBar
                        name={this.props.name}
                    />
                </section>
                <section className='ui container main-container'>
                    {View}
                </section>
            </div>
        )
    }
}

export default MainView;