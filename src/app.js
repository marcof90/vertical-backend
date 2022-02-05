const app = require('./server')

//--------server start--------
app.listen(app.get('port'), ()=>{
    console.log('Server started')
})