import debugModule = require('debug');
import app from './app';
import './env';

const port = process.env.PORT || 3000;
const debug = debugModule('Debugger');

app.set('port', port);
app.listen(app.get('port'), (err: Error) => {
  if (err) {
    return debug(err);
  }

  return debug(`Express running → PORT ${port}`);
});
