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
        return <EventList events={this.state.events} />;
    },
    _onChange(events) {
        this.setState(getUpdatedState());
    }
})
