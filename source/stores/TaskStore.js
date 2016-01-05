var AppDispatcher = require('../dispatcher/AppDispatcher');
// var EventEmitter = require('EventEmitter');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _tasks = []
var CHANGE_EVENT = 'change';

function create(text) {

	// Create the new task.
	var id = Date.now();
	var newTask = {
		taskId: id,
		taskTitle: text
	};
	_tasks[id] = newTask
}

var TaskStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getAll: function() {
		return _tasks;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});

function handleAction(task) {
	if (task.type === 'create_task') {
		create(task.text);
		TaskStore.emitChange();
	}
}

TaskStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = TaskStore;