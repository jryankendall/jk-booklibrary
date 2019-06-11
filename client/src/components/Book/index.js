import React, { Component } from 'react';

class Book extends Component {

    render() {
        let props = this.props;
        return(
            <div className="row book-row">
                <div className="book-cover-box col s2">
                    <img className="book-cover" src={props.image} alt={`${props.title}`}></img>
                </div>
                <div className="book-box col s10">
                    <h4 className="underline">{props.title}</h4>
                    <p>ISBN: {props.isbn}</p>
                    <h5>by {props.authors}</h5>

                    <p><span className="bold">Description:</span> {props.description}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">Find on Google Books</a>

                </div>
            </div>
        )
    }
}

export default Book;