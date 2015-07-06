var Dispatcher = require('../dispatcher');

var ActionsCreator = {
	createActionAdd: function (item) {
		Dispatcher.dispatch({actionType: 'ADD_ITEM', item: item})
	}
};

module.exports = ActionsCreator;