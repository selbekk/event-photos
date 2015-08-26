let React = require('react');
let RouteHandler = require('react-router').RouteHandler;
module.exports = React.createClass({
    render() {
        return (
            <div className="app-wrapper">
                <RouteHandler/>
            </div>
        );
    }
});
