import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import SideNav from './components/SideNav.jsx'
import MainView from './components/MainView.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            name: null,
            commentsToday: 0,
            activePage: 1
        }
    }
    switchPage(page) {
        console.log('switch page ' + page)
        this.setState({activePage: page});
    }
    componentDidMount() {
        axios.get('/app/user')
        .then( (response) => {
            let obj = response.data.user.obj;    
            console.log('account');
            console.log(obj);
            
            this.setState({
                email:obj.email,
                name:obj.name
            })
        })
    }
    render() {
        return (
            <div className='root-container'>
                <div className='side-nav-container'>
                    <SideNav 
                        switchPage={this.switchPage.bind(this)}
                        activePage={this.state.activePage}
                    />
                </div>
                <div className='app-main-container'>
                    <MainView
                        name={this.state.name}
                        activePage = {this.state.activePage}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));