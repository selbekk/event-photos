let React = require('react');

let EventActions = require('../actions/EventActions');
let EventStore = require('../stores/EventStore');
let EventList = require('./EventList');

function getUpdatedState() {
    return {
        events: EventStore.getLatest()
    };
}

module.exports = React.createClass({
    getInitialState() {
        return getUpdatedState();
    },
    componentDidMount() {
        EventStore.addChangeListener(this._onChange);
        EventActions.getLatest();
    },
    componentWillUnmount() {
        EventStore.removeChangeListener(this._onChange);
    },
    render() {

        return (
            <div className="app-content">
                <p>There are {this.state.events.length} events currently.</p>
                <EventList events={this.state.events} />
            </div>
        );
    },
    _onChange(events) {
        this.setState(getUpdatedState());
    }
})
