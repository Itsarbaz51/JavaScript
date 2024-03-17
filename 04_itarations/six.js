const coding = ["js", "ruby", "java", "pythan", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = nums.filter( (num) => {
//     return num > 4
    
// })


const newNum = []

nums.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

// console.log(newNum);


const books = [
    {title: 'Book One', genre: 'Fictioin', publish: '1981', edition: '2004'},
    {title: 'Book Two', genre: 'Non-Fictioin', publish: '1982', edition: '2005'},
    {title: 'Book Three', genre: 'Science', publish: '1983', edition: '2006'},
    {title: 'Book Four', genre: 'Computer', publish: '1982', edition: '2007'},
    {title: 'Book Five', genre: 'Computer', publish: '1985', edition: '2008'},
    {title: 'Book Six', genre: 'Urdu', publish: '1986', edition: '2003'},
    {title: 'Book Seven', genre: 'Accounts', publish: '1987', edition: '2009'},
    {title: 'Book Eight', genre: 'English', publish: '1988', edition: '2000'},
    {title: 'Book Nine', genre: 'Computer', publish: '1989', edition: '2004'},
]

// const userBooks = books.filter( (bk) => bk.genre === 'Computer')

const userBooks = books.filter( (bk) => {
    return bk.publish === '1982' && bk.genre === 'Computer'
})

console.log(userBooks);