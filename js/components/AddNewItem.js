var React = require('react');

var AddNewItem = React.createClass({

    createNew: function (e) {
        e.preventDefault();

        var elem = {};

        elem.title = this.refs.title.getDOMNode().value;
        elem.color = this.refs.color.getDOMNode().value.split(',');
        elem.hardness = +this.refs.hardness.getDOMNode().value;
        elem.transparency = this.refs.transparency.getDOMNode().value;
        elem.group = this.refs.group.getDOMNode().value;

        this.props.createNewGem(elem);

    },

    render: function () {
        var groups = [];

        this.props.groups.forEach(function (item) {
            groups.push(<option value={item}>{item}</option>);

        });

        return (
            (
                <form className="form-horizontal">
                <fieldset>
                    <legend>New gem</legend>
                    <div className="form-group">
                        <label htmlFor="title" className="control-label">Title</label>
                        <input type="text" className="form-control" ref="title" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color" className="control-label">Color</label>
                        <input type="text" className="form-control" ref="color" placeholder="Color"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hardness" className="control-label">Hardness</label>
                        <input type="number" className="form-control" ref="hardness" placeholder="Hardness"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="transparency" className="control-label">Transparency</label>
                        <input type="text" className="form-control" ref="transparency" placeholder="Transparency"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Crystal system</label>
                        <select className="form-control" ref="group">{groups}</select>

                    </div>
                    <div className="form-group">
                        <button type="reset" className="btn btn-default">Cancel</button>
                        <button onClick = {this.createNew} className="btn btn-primary">Submit</button>
                    </div>
                </fieldset>

            </form> )
        );
    }
});

module.exports = AddNewItem;