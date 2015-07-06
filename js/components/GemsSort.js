var React = require('react');


var GemsSort = React.createClass({
    changeEventHandler: function (event) {
        this.props.onSort(event.target.value);
    },

    render: function () {
        return (
            (<form className="form-horizontal">
                <label className="label label-primary">Sort by</label>
                <select className="form-control" id="select" onChange={this.changeEventHandler}>
                    <option value="title">Title</option>
                    <option value="hardness">Hardness</option>
                    <option value="transparency">Transparency</option>
                </select>
            </form>)
        );
    }
});

module.exports = GemsSort;