let React = require('react');

let EventListItem = React.createClass({
    render() {
        let event = this.props.event;

        return (
            <li className="event-list-item">
                <div className="event-featured-photo" style="background-image: url({event.coverPhoto})"></div>
                <h2 className="event-heading">{event.title}</h2>
            </li>
        );
    }
});


module.exports = EventListItem;
