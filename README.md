# Node-Simple-RSS-Feed-Proxy-Server

## Dependencies Installation
<ul>
  <li>Axios - <code>npm i --save axios</code> - making API calls</li>
  <li>Xml2js - <code>npm i --save xml2js</code> - XML to JSON converter</li>
  <li>Node-Gyp - <code>npm install --save node-gyp</code> - needed for XML2JS conversion to work </li>
  <li>Steam & Timers - <code>npm install --save stream timers</code> - needed for XML2JS conversion to work</li>
</ul>

## Usage
Structure the API call as code below and assign in to empty variable
<br/>
```
// import the dependencies as below
import axios from 'axios';
const xml2js = require('xml2js');

const data = await axios
.get(Insert URL with XML Response here)
.then((response) => {
    return xml2js.parseStringPromise(response.data);
});
console.log(data);
```

