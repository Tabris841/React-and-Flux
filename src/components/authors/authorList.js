"use strict";

var React = require('react');

var AuthorList = React.createClass({
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tboby>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tboby>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;
