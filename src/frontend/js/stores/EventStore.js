let assign = require('object-assign');
let EventConstants = require('../constants/EventConstants');
let EventDispatcher = require('../dispatchers/EventDispatcher');
let EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'CHANGE_EVENT';

let _events = [ ]; // TODO: Populate with mock data

let EventStore = assign(new EventEmitter(), {
    getLatest() {
        return _events;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: EventDispatcher.register(payload => {
        switch(payload.action.actionType) {
            case EventConstants.GET_LATEST:
                EventStore.emitChange();
                break;
        }
    })
});

module.exports = EventStore;
