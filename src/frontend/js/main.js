let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute } = Router;

let App = require('./components/App');
let Index = require('./components/Index');

let routes = (
    <Route name="app" handler={App} path="/">
        <DefaultRoute handler={Index} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
