import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date
        }
        this.tick = this.tick.bind(this);
    } // Constructor setting the initial state of the clock, and binding

    tick() {
        this.setState({time: new Date});
    } // This just rerenders the state to Date() again

    componentDidMount() {
        this.ticker = setInterval(this.tick, 1000);
    } // This just runs the tick() function every 1 second

    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    render() {
        return (<div>
                <div className='clock'>
                    <p>Date: {this.state.time.toDateString()}</p>
                    <p>Time: {this.state.time.toLocaleString()}</p>
                </div>
            </div>);
    }
}

export default Clock;