var React = require('react');
var gemsStore = require('../stores/gemsStore');
var ActionsCreator = require('../actions/actions');
var GemsSort = require('./GemsSort');
var GemsFilter = require('./GemsFilter');
var ShowOnly = require('./ShowOnly');
var GemsTable = require('./GemsTable');
var AddNewItem = require('./AddNewItem');
var Helpers = require('../shared/helpers');


var GemsCatalog = React.createClass({


    _onChange: function () {
        this.setState({
            items: gemsStore.getItems()
        });
    },


    getInitialState: function () {
        gemsStore.addChangeListener(this._onChange);
        return {
            items: gemsStore.getItems(),
            sortBy: '',
            group: '',
            color: ''
        }
    },

    onSort: function (selectedSort) {
        this.setState({
            sortBy: selectedSort
        })
    },

    filterByGroup: function (group) {
        this.setState({
            group: group
        })
    },

    filterByColor: function(text) {
        this.setState({
            color: text
        })
    },

    createNewGem: function (element) {
        ActionsCreator.createActionAdd(element);
    },

    render: function () {
        return (<div>
            <GemsSort onSort={this.onSort} />
            <hr />
            <GemsFilter filterByColor={this.filterByColor} />
            <hr />
            <ShowOnly groups = {Helpers.getGroups(this.state.items)} filterByGroup={this.filterByGroup}/>
            <hr />
            <GemsTable gems = {this.state.items} sortBy = {this.state.sortBy} onlyGroup={this.state.group} color={this.state.color}/>
            <hr />
            <AddNewItem groups = {Helpers.getGroups(this.state.items)} createNewGem = {this.createNewGem} />


        </div>)
    }
});

module.exports = GemsCatalog;