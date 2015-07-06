var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var gemstones = {};

gemstones['Hexagonal'] = [{
    id: 0,
    title: 'Agate',
    color: ['White', 'Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Brown', 'Pink', 'Purple', 'Gray', 'Black', 'Banded', 'Multicolored'],
    hardness: 7,
    transparency: 'Translucent',
    'group': 'Hexagonal'
},{
    id: 3,
    title: 'Amethyst',
    color: ['Purple'],
    hardness: 7,
    transparency: 'Transparent to translucent',
    'group': 'Hexagonal'
}, {
    id: 4,
    title: 'Bloodstone',
    color: ['Red', 'Green', 'Brown', 'Multicolored'],
    hardness: 7,
    transparency: 'Opaque',
    'group': 'Hexagonal'
}, {
    id: 6,
    title: 'Citrine',
    color: ['Yellow', 'Orange', 'Brown'],
    hardness: 7,
    transparency: 'Transparent',
    'group': 'Hexagonal'
}, {
    id: 7,
    title: 'Jasper',
    color: ['White', 'Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Brown', 'Gray', 'Black', 'Banded', 'Multicolored'],
    hardness: 6.75,
    transparency: 'Opaque',
    'group': 'Hexagonal'
}, {
    id: 8,
    title: 'Morganite',
    color: ['Pink', 'Purple'],
    hardness: 7.75,
    transparency: 'Transparent to translucent',
    'group': 'Hexagonal'
}];

gemstones['Orthorhombic'] = [{
    id: 1,
    title: 'Alexandrite',
    color: ['Blue', 'Red', 'Green', 'Yellow', 'Pink', 'Purple', 'Gray', 'Multicolored'],
    hardness: 8.5,
    transparency: 'Transparent to nearly opaque',
    'group': 'Orthorhombic'
},{
    id: 5,
    title: 'Cat"s Eye',
    color: ['Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Brown', 'Pink', 'Purple', 'Gray', 'Multicolored'],
    hardness: 8.5,
    transparency: 'Translucent',
    'group': 'Orthorhombic'
}];


gemstones['Isometric'] = [ {
    id: 9,
    title: 'Platinum',
    color: ['Metallic', 'White'],
    hardness: 4.25,
    transparency: 'Opaque',
    'group': 'Isometric'
}, {
    id: 10,
    title: 'Pyrite',
    color: ['Metallic', 'Yellow', 'Gray'],
    hardness: 6.25,
    transparency: 'Opaque',
    'group': 'Isometric'
}, {
    id: 10,
    title: 'Pyrite',
    color: ['Metallic', 'Yellow', 'Gray'],
    hardness: 6.25,
    transparency: 'Opaque',
    'group': 'Isometric'
}];


var gemsStore = assign({}, EventEmitter.prototype, {
    getItems: function () {
        return gemstones;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    }

});

Dispatcher.register(function (action) {
    debugger;
    switch (action.actionType) {
        case 'ADD_ITEM':
            gemstones[action.item.group].push(action.item);
            gemsStore.emitChange();
            break;
    }
});

module.exports = gemsStore;