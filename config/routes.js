module.exports = {

	"prefix": "/api",
	
	"get": {

		"/hello/world": {

			controller: "hello",
			method: "world",

	 		filters: []
	 	}
	},

	"post": {}
}