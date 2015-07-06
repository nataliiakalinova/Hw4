var React = require('react');

var GemsRow = React.createClass({
    render: function() {
        return (
            (<tr>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.color.join(', ')}</td>
                <td>{this.props.item.hardness}</td>
                <td>{this.props.item.transparency}</td>
                <td>{this.props.item.group}</td>
            </tr>)
        );
    }
});


module.exports = GemsRow;