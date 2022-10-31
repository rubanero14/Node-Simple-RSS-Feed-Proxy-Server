const PORT = process.env.PORT || 3000;
const Express = require('express');
const Cors = require('cors');
const axios = require('axios');
const xml2js = require('xml2js');

// Initiate Express
const app = Express();

// Activate Cors
app.use(
    Cors({
        origin: '*',
    }
))

app.get('/:URL', async (req, res, next) => {
    const payload = req.params.URL;
    console.log(payload);
    const data = await axios
    .get(payload)
    .then((response) => {
        return xml2js.parseStringPromise(response.data);
    })
    .catch((err) => {
        return (err.message);
    })
    res.send(data);
})

// Initiate Server
app.listen(PORT, () => { console.log(`Server is online on PORT: http://localhost:${PORT}`)})

