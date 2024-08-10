const books = require('../models/books.model')

function get_bookshop (req, res) {
    let data = books
    res.render('first-page', {data: data})
}

function get_book_id (req, res) {
    const id = Number(req.params.id)
    const item = books.find(item => item.id === id)
    if(!item){
        res.status(404).json({error: 'Item not found'})
    }else{
        res.render('second-page', {item: item})
    }
}

function post_bookshop (req, res) {
    let data = books
    const item = {...req.body, id: books.length + 1}
    books.push(item)
    res.render('first-page', {data: data})
}

function put_bookshop (req, res) {
    const id = Number(req.params.id)
    const itemIndex = books.findIndex(item => item.id === id)
    if(itemIndex === -1){
        res.status(404).json({error: 'Item not found'})
    }else{
      const oldItem = {...books[itemIndex]}
      const newItem = {...oldItem, ...req.body, id}
      books[itemIndex] = newItem
      res.render('first-page')
    }
}

function del_bookshop (req, res) {
    const id = Number(req.params.id)
    const itemIndex = books.findIndex(item => item.id === id)
    if(itemIndex === -1){
        res.status(404).json({error: 'Item not found'})
    }else{
        books.splice(itemIndex, 1)[0]
        res.render('first-page')
    }
}

module.exports = {
    get_bookshop,
    get_book_id,
    post_bookshop,
    put_bookshop,
    del_bookshop
}