const React = require('react');
const PhotoListItem = require('./PhotoListItem');

const PhotoList = React.createClass({
    render() {
        if(!this.props.photos || !this.props.photos.length) {
            return (
                <h2 className="photo-list-empty">No photos yet. Add one!</h2>
            );
        }
        const listItems = this.props.photos.map(p => <PhotoListItem key={p.tag} photo={p} />);
        return (
            <ul className="photo-list">
                { listItems }
            </ul>
        );
    }
});

module.exports = PhotoList;
