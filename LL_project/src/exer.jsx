//create a class based component named display123
//create a state variable with 50 records
// implement pagination logic to show 5 records per page
// add buttons to navigate to next and previous pages
// display current page number and total pages
// when users is on first page , display previous button
// when user is on last page , display next button

// records (array) , currentpage (number) , recordsPerPage (number)
// totalpages (number), displayedrecords (array)


import React, { Component } from 'react';
class Display123 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: Array.from({ length: 50 }, (_, i) => `Record ${i + 1}`),
            currentPage: 1,
            recordsPerPage: 5
        };
    }

    nextPage = () => {
        this.setState((prevState) => ({
            currentPage: Math.min(prevState.currentPage + 1, this.totalPages())
        }));
    }
    prevPage = () => {
        this.setState((prevState) => ({
            currentPage: Math.max(prevState.currentPage - 1, 1)
        }));
    }
    totalPages = () => {
        return Math.ceil(this.state.records.length / this.state.recordsPerPage);
    }
    displayedRecords = () => {
        const startIndex = (this.state.currentPage - 1) * this.state.recordsPerPage;
        const endIndex = startIndex + this.state.recordsPerPage;
        return this.state.records.slice(startIndex, endIndex);
    }
    render() {
        return (
            <div>
                <h2>Pagination Example</h2>
                <ul>
                    {this.displayedRecords().map((record, index) => (
                        <li key={index}>{record}</li>
                    ))}
                </ul>
                <button onClick={this.prevPage} disabled={this.state.currentPage === 1}>
                    Previous
                </button>
                <button onClick={this.nextPage} disabled={this.state.currentPage === this.totalPages()}>
                    Next
                </button>
                <p>
                    Page {this.state.currentPage} of {this.totalPages()}
                </p>
            </div>
        );
    }
}

export default Display123;