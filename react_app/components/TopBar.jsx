import React from 'react'

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
      console.log(this.props);
        return (
          <nav className='top-down'>
            <div className="ui secondary  menu">
              <div className="item">
                <div className="ui icon input">
                  <input type="text" placeholder="Search..."/>
                  <i className="search link icon"></i>
                </div>
              </div>
              <div className="right menu">
                <a className="ui item">
                  <h5 className="ui header">
                    <i className="user outline icon"></i>
                    <div className="content">
                      {this.props.name}
                    </div>
                  </h5>
                </a>
                <a className="ui item">
                  Logout
                </a>
              </div>
              </div>
              <h4 className="red ui horizontal divider header">
                <i className="red comments outline icon"></i>
                Surgetalk
              </h4>
            </nav>
        )
    }
}


export default TopBar;