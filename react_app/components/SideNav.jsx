import React from 'react';


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    switchPage(num) {
        if(num===this.state.activePage)
            return;
        this.props.switchPage(num);
        this.setState({activePage:num})
    }
    
    render() {
        
        return (
            <div className='side-bar-root'>
                <div 
                    className={'side-bar-box'+ (this.props.activePage === 1 ? ' active':'')}
                    onClick={() => this.props.switchPage(1)}
                >
                    <i className="big home icon"></i>
                </div>
                <div 
                    className={'side-bar-box'+ (this.props.activePage === 2 ? ' active':'')}
                    onClick={() => this.props.switchPage(2)}
                >
                    <i className="big inbox icon"></i>
                </div>
                <div 
                    className={'side-bar-box'+ (this.props.activePage === 3 ? ' active':'')}
                    onClick={() => this.props.switchPage(3)}
                >
                    <i className="big bar chart icon"></i>
                </div>
            </div>
        )
    }
}

export default SideNav;