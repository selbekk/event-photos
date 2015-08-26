let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute } = Router;

let App = require('./components/App');
let IndexView = require('./components/IndexView');
let EventDetailView = require('./components/EventDetailView');

let routes = (
    <Route name="app" handler={App} path="/">
        <DefaultRoute handler={IndexView} />
        <Route name="event-detail" handler={EventDetailView} path="/event/:tag" />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
