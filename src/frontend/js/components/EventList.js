let React = require('react');

let EventList = React.createClass({
    render() {
        let listItems = this.props.events.map(e => <EventListItem event={e} />);
        return (
            <ul className="event-list">
                { listItems }
            </ul>
        );
    }
});

module.exports = EventList;
