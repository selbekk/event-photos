const React = require('react');
const EventStore = require('../stores/EventStore');
const EventActions = require('../actions/EventActions');
const PhotoList = require('./PhotoList');

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
            <div className="event-overview">
                <header className="event-overview-header" style={{backgroundImage: 'url(' + this.state.event.coverPhoto + ')'}}>
                    <h2>{this.state.event.title}</h2>
                    <p className="event-overview-photo-count">{this.state.event.imageCount} photos</p>
                </header>
                <PhotoList photos={this.state.event.photos} />
            </div>
        );
    },
    _onChange() {
        this.setState(getUpdatedState());
    }
});

module.exports = EventDetailView;
