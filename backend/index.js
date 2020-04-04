const express = require("express");

const app = express();

app.get('/', (request, response) => {
    const m = {manga: "Ola viado"}
    return response.json(m.manga)
})

app.listen(3333);