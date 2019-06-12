import React, {Component} from 'react';
import API from '../utils/bookAPI';
import Book from '../components/Book';

class Search extends Component {

    state = {
        books: [],
        bookinput: ""
    };


    findTitle = (title) => {
        console.log(title);
        if (!title.trim()) return null;
        let bookObject = {
            data: {
                title: title
            }
        };
        API.get.byTitle(bookObject)
            .then(res => {
                this.setState( { books: res.data } );
            })
            .catch(err => console.log(err));
    };

    bookInputChange = (event) => {
        let value = event.target.value;

        this.setState( {
            bookinput: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row book-search-row">
                    <div className="col s12 book-search-box">
                        <input id="book-name-input" value={this.state.bookinput} onChange={this.bookInputChange}></input>
                        <button id="book-name-submit" onClick={() => { this.findTitle(this.state.bookinput) } }>Submit Book</button>
                    </div>
                </div>

            </div>
        )
    };
}

export default Search;