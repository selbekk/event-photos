let EventConstants = require('../constants/EventConstants');
let EventDispatcher = require('../dispatchers/EventDispatcher');

let EventActions = {
    getLatest() {
        EventDispatcher.handleViewAction({
            actionType: EventConstants.GET_LATEST
        });
    },
    getEvent(tag) {
        EventDispatcher.handleViewAction({
            actionType: EventConstants.GET_EVENT,
            tag
        });
    }
};

module.exports = EventActions;
