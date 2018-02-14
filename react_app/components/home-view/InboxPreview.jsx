import React from 'react';

class InboxPreview extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h3 class="ui top attached header">
                  New Comments
                </h3>
                <div class="ui attached segment">
                    <div className='ui grid'>
                        <div className='two wide'></div>
                        <div className='two wide'></div>
                        <div className='two wide'></div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default InboxPreview;