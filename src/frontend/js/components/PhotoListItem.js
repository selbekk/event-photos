const React = require('react');

const PhotoListItem = React.createClass({
    render() {
        const photo = this.props.photo;

        return (
            <li className="photo-list-item">
                <div style={{backgroundImage: 'url(' + photo.url + ')'}} className="photo-list-item-image" />
                <span className="photo-list-item-likes"><i className="fa fa-thumbs-o-up"></i>{photo.likes}</span>
            </li>

        );
    }
});


module.exports = PhotoListItem;
