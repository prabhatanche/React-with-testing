var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function () {
      var {countdownstatus} = this.props;
      var renderStartStopButton = ()=>{
          if(countdownstatus === 'started'){
            return  <button className = "button secondary">Pause</button>
          }else if(countdownstatus === 'paused'){
            return <button className = "button primary">Start</button>
          }
      };
      return (
        <div className="controls">
            {renderStartStopButton()}
            <button className="button alert">Clear</button>
        </div>
      )
    }
});
module.exports = Controls;