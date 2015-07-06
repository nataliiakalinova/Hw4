var React = require('react');

var GemsCategoryRow = React.createClass({
    render: function () {
        return (<tr>
            <th colSpan="5">{this.props.category}</th>
        </tr>);
    }
});

module.exports = GemsCategoryRow;