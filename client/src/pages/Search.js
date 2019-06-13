import React, {Component} from 'react';
import API from '../utils/bookAPI';
import Book from '../components/Book';

class Search extends Component {

    state = {
        books: [],
        bookinput: "",
        foundBooks: [{
            title: "",
            authors: "",
            description: "",
            added: "",
            link: "",
            image: "",
            isbn: ""
        }]
    };

    findTitleDb = (title) => {
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

    findTitle = (title) => {
        console.log(title);
        if (!title.trim()) return null;
        let bookObject = {
            data: {
                title: title
            }
        };
        API.google.one(bookObject)
            .then(res => {
                let bookList = res.data.items;
                console.log(bookList);
                
                const booksState = [];
                for (let i = 0; i < (bookList.length < 5 ? bookList.length : 5); i++) {
                    const foundBook = bookList[i];
                    let newBook = {
                        title:  foundBook.volumeInfo.title,
                        authors: foundBook.volumeInfo.authors,
                        link: foundBook.volumeInfo.infoLink,
                        description: foundBook.volumeInfo.description,
                        image: foundBook.volumeInfo.imageLinks.smallThumbnail,
                        isbn: foundBook.volumeInfo.industryIdentifiers[0].identifier || ""
                    };
                    booksState.push(newBook);
                }
                this.setState( { foundBooks: booksState })
            })
    }

    bookInputChange = (event) => {
        let value = event.target.value;

        this.setState( {
            bookinput: value
        })
    }

    render() {
        let theBooks = this.state.foundBooks;
        console.log(theBooks);
        
        return (
            <div className="container">
                <div className="row book-search-row">
                    <div className="col s12 book-search-box">
                        <input id="book-name-input" value={this.state.bookinput} onChange={this.bookInputChange}></input>
                        <button id="book-name-submit" onClick={() => { this.findTitle(this.state.bookinput) } }>Submit Book</button>
                    </div>
                </div>
                <>
                    {theBooks.map((value, index) => {
                        let oneBook = theBooks[index];
                        return <Book key={index} index={index} 
                        title={oneBook.title}
                        authors={oneBook.authors}
                        description={oneBook.description}
                        added={oneBook.added}
                        link={oneBook.link}
                        image={oneBook.image}
                        isbn={oneBook.isbn}
                    />
                    })}
                    
                </>

            </div>
        )
    };
}

export default Search;