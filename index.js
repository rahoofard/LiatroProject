const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.json({
    		"message": "My name is Ryan Hoofard",
    		"timestamp": (new Date()).getTime()
	});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
