const express = require('express')
const path = require('path')
const cors = require('cors')

const chalk = require('chalk')

const app = express()

const apiController = require('./controller/api')

app.set('port', 3000)
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/test', apiController.test)

app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'))
    console.log('  Press CTRL-C to stop\n')
});
