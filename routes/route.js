module.exports=(app)=>{
    const blog=require('../controllers/controllers');
    app.get('/api/blogs',blog.getall);
    app.get('/api/blog/:blogId',blog.getone);
    app.get('/api/blog/title/:blogTitle',blog.getoneByTitle);
    app.get('/api/blog/author/:blogAuthor',blog.getoneByAuthor);
    app.put('/api/update/:blogId',blog.updateone);
    app.delete('/api/delete/:blogId',blog.deleteone);
    app.post('/api/create',blog.create);
    
}
