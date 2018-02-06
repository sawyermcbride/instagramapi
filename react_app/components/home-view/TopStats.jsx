import React from 'react';

class TopStats extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return (
            <div>
            <h3 class="ui top attached header">
              Today's Briefing 
            </h3>
            <div class="ui attached segment">
               <p>
                <div className='ui three column divided grid'>
                    <div class="row">
                        <div class="column">
                          <p>
                            <div class="ui statistic red">
                              <div class="value">
                                76
                              </div>
                              <div class="label">
                                Comments Today
                              </div>
                            </div>
                          </p>
                        </div>
                        <div class="column">
                          <p>
                            <div class="ui statistic teal">
                              <div class="value">
                                45.5
                              </div>
                              <div class="label">
                                Average Comments per Photo
                              </div>
                            </div>
                          </p>
                        </div>
                        <div class="column">
                          <p>
                            <div class="ui statistic blue">
                              <div class="value">
                                205
                              </div>
                              <div class="label">
                                Un Responded Comments
                              </div>
                            </div>
                          </p>
                        </div>
                    </div>
                </div>
              </p>
            </div> 
            </div>
            
        )
    }
}

export default TopStats;