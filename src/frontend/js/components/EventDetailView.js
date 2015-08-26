let React = require('react');
let EventStore = require('../stores/EventStore');
let EventActions = require('../actions/EventActions');

function getUpdatedState() {
    return {
        event: EventStore.getEvent()
    }
}

let EventDetailView = React.createClass({
    getInitialState() {
        return getUpdatedState();
    },
    componentDidMount() {
        EventStore.addChangeListener(this._onChange);
        EventActions.getEvent(this.props.params.tag);
    },
    componentWillUnmount() {
        EventStore.removeChangeListener(this._onChange);
    },
    render() {
        console.log(this.state);
        return (
            <div className="event-detail">
                <h2>Some detail view</h2>
            </div>
        );
    },
    _onChange() {
        this.setState(getUpdatedState());
    }
});

module.exports = EventDetailView;
