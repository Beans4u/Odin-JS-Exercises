const getTheTitles = function(books) {
    
    const titles = books.map((book) => {
        return book.title;
    })

    return titles
}

module.exports = getTheTitles;