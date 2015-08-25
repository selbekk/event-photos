let assign = require('object-assign');
let Dispatcher = require('flux').Dispatcher;

let EventDispatcher = assign(new Dispatcher(), {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        });
    }
});

module.exports = EventDispatcher;
