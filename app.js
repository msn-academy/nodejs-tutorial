const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({ message: "Hello world", queryString: request.query });
});

app.get('/message', (request, response) => {
  return response.json({ message: request.query.message });
});

app.listen(8050, () => console.log('Server running on port 8050'));
