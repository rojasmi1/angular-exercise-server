import './env'
import app from './app'

const port = process.env.PORT || 3000

app.set('port', port)
app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Express running → PORT ${port}`)
})
