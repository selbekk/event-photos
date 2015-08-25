let React = require('react');
let EventListItem = require('./EventListItem');

let EventList = React.createClass({
    render() {
        let listItems = this.props.events.map(e => <EventListItem key={e.tag} event={e} />);
        return (
            <ul className="event-list">
                { listItems }
            </ul>
        );
    }
});

module.exports = EventList;
