const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
	res.json({
    		"message": "My name is Ryan Hoofard",
    		"timestamp": (new Date()).getTime(),
		"Testing": "if github runner is working"
	});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
