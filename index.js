const port = 3000;
const app = require('./app')

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})