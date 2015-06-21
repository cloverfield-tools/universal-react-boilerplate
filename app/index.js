import app from 'server';
import configure from 'qconf';

const config = configure();
const port = config.get('port') || 3000;

app.listen(port, () => app.log.info(`Listening on port ${port}`));
