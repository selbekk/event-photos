let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute } = Router;

let App = require('./components/App');
let Index = require('./components/IndexView');
let Event = require('./components/EventDetailView');

let routes = (
    <Route name="app" handler={App} path="/">
        <DefaultRoute handler={IndexView} />
        <Route name="event-detail" handler={EventDetailView} path="/e/:tag" />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
