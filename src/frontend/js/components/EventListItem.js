let React = require('react');
let Link = require('react-router').Link;

let EventListItem = React.createClass({
    render() {
        let event = this.props.event;

        return (

            <li className="event-list-item">
                <Link to="event-detail" params="{event}">
                    <div className="event-list-item-image" style={{backgroundImage: 'url(' + event.coverPhoto +')'}}></div>
                    <h2 className="event-tag">#{event.tag}</h2>
                </Link>
            </li>

        );
    }
});


module.exports = EventListItem;
