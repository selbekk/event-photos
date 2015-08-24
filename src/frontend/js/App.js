let React = require('react');
let RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        return (
            <div className="app-wrapper">
                <h2>Hello react</h2>
                <RouteHandler/>
            </div>
        );
    }
});
