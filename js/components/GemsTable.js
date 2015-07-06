var React = require('react');

var GemsCategoryRow = require('./GemsCategoryRow');
var GemsRow = require('./GemsRow');
var Helpers = require('../shared/helpers');

var GemsTable = React.createClass({
    sortByProp: function (arr, prop) {
        return arr.sort(function (a, b) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0;
        });
    },

    sortAllByProp: function (gems, prop) {
        var sort = this.sortByProp;
        Helpers.handlingGems(gems, function (group, array) {
            sort(array, prop);
        }.bind(this));
    },

    render: function () {
        var rows = [];
        var gems = this.props.gems;
        var selectedGroup = this.props.onlyGroup;
        var color = this.props.color;

        this.sortAllByProp(gems, this.props.sortBy);

        Helpers.handlingGems(gems, function (group, array) {

            if ((selectedGroup) && !(group === selectedGroup)) {
                return;
            }

            rows.push(<GemsCategoryRow category={group}/>);

            array.forEach(function (item) {
                if (color) {
                    var i = -1;
                    item.color.forEach(function (element) {
                        if (element.toLowerCase().indexOf(color.toLowerCase()) !== -1) {
                            i = 0;
                            return;
                        }
                    });
                    if (i === -1) return;
                }

                rows.push(<GemsRow item={item} key={item.title}/>);

            }.bind(this));
        });


        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Color</th>
                        <th>Hardness</th>
                        <th>Transparency</th>
                        <th>Crystal system</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = GemsTable;