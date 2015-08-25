let EventConstants = require('../constants/EventConstants');
let EventDispatcher = require('../dispatchers/EventDispatcher');

let EventActions = {
    getLatest() {
        EventDispatcher.handleViewAction({
            actionType: EventConstants.GET_LATEST
        });
    }
};

module.exports = EventActions;
