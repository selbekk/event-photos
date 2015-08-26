let assign = require('object-assign');
let EventConstants = require('../constants/EventConstants');
let EventDispatcher = require('../dispatchers/EventDispatcher');
let EventEmitter = require('events').EventEmitter;
let request = require('superagent');

const CHANGE_EVENT = 'CHANGE_EVENT';

let _events = []; // TODO: Populate with mock data
let _eventDetail = {};

let EventStore = assign(new EventEmitter(), {
    getLatest() {
        return _events;
    },
    getEvent() {
        return _eventDetail;
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
                request.get('http://localhost:4001/events').end((err, res) => {
                    if(err) {
                        console.error(err);
                        return; // TODO: Improve error handling
                    }

                    _events = res.body;
                    EventStore.emitChange();
                });
                break;
            case EventConstants.GET_EVENT:
                request.get('http://localhost:4001/events/' + payload.action.tag)
                    .end((err, res) => {
                        if(err) {
                            console.error(err);
                            return; // TODO: Improve error handling
                        }

                        _eventDetail = res.body;
                        EventStore.emitChange();
                    })
                break;
        }
    })
});

module.exports = EventStore;
