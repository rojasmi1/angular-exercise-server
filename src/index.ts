import debugModule = require('debug');
import app from './app';
import './env';
import { DBConnector } from './utils/db-connector';

const port = process.env.PORT || 3000;
const debug = debugModule('Debugger');

debug('Connecting to Postgres');
const dbConnector = new DBConnector();
const pool = dbConnector.getPool();

// Query the DB time to test the connection
pool.query('SELECT NOW()', (err, res) => {
  debug(err, res);
  pool.end();
});

app.set('port', port);
app.listen(app.get('port'), (err: Error) => {
  if (err) {
    return debug(err);
  }

  return debug(`Express running → PORT ${port}`);
});
