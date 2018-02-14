import React from 'react';

import TopStats from './home-view/TopStats.jsx';
import InboxPreview from './home-view/InboxPreview.jsx';
class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <TopStats/>
                <InboxPreview />
            </div>
            
        )
    }
}

export default HomeView;