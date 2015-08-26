let EventConstants = require('../constants/EventConstants');
let EventDispatcher = require('../dispatchers/EventDispatcher');

let EventActions = {
    getLatest() {
        EventDispatcher.handleViewAction({
            actionType: EventConstants.GET_LATEST
        });
    },
    get(tag) {
        EventDispatcher.handleViewAction({
            actionType: EventConstants.GET_TAG,
            tag
        });
    }
};

module.exports = EventActions;
