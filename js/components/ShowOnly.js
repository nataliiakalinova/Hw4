var React = require('react');

var ShowOnly = React.createClass({

    changeShow: function (e) {
        this.props.filterByGroup(e.target.value);
    },

    render: function() {
        var radios = [];
        radios.push();
        radios.push(<label className="label label-primary">Show only:</label>);

        this.props.groups.forEach(function (item) {
            return radios.push(<div><label ><input type="radio" name="optionsRadios" value={item} onChange={this.changeShow} />{item}</label></div>);

        }.bind(this));

        radios.push(<div><label><input type="radio" name="optionsRadios" value='' onChange={this.changeShow} />All</label></div>);

        return (
            ( <form className="form-horizontal">
                {radios}
            </form> )
        );
    }
});

module.exports = ShowOnly;