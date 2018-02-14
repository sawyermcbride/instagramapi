import React from 'react';

class TopStats extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return (
            <div>
            <h3 className="ui top attached header">
              Today's Briefing 
            </h3>
            <div className="ui attached segment">
                <div className='ui three column divided grid'>
                  <div className="row">
                    <div className="column">
                        <div className="ui statistic red">
                          <div className="value">
                            76
                          </div>
                          <div className="label">
                            Comments Today
                          </div>
                        </div>
                      </div>
                    <div className="column">
                      <div className="ui statistic teal">
                        <div className="value">
                          45.5
                        </div>
                        <div className="label">
                          Average Comments per Photo
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="ui statistic blue">
                        <div className="value">
                          205
                        </div>
                        <div className="label">
                          Un Responded Comments
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
            </div> 
            </div>
            
        )
    }
}

export default TopStats;