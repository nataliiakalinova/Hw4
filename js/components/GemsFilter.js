var React = require('react');

var GemsFilter = React.createClass({

    filterChange: function (e) {
        this.props.filterByColor(e.target.value);

    },

    render: function () {
        return (
            ( <form className="form-horizontal">
                <label className="label label-primary" htmlFor="filter">Filter by color</label>
                <input type="text" className="form-control" id="filter" onChange={this.filterChange}/>
            </form> )
        );
    }
});

module.exports = GemsFilter;