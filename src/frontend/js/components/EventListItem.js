let React = require('react');

let EventListItem = React.createClass({
    render() {
        let event = this.props.event;

        return (
            <li className="event-list-item">
                <div className="event-list-item-image" style={{backgroundImage: 'url(' + event.coverPhoto +')'}}></div>
                <h2 className="event-tag">#{event.tag}</h2>
            </li>
        );
    }
});


module.exports = EventListItem;
