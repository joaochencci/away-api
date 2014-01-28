module.exports = {

	"prefix": "/api",
	
	"get": {

		"/hello/world": {

			controller: "hello",
			method: "world",

	 		filters: []
	 	},

	 	"/destination/create": {

			controller: "destination",
			method: "create",

	 		filters: []
	 	},

		"/destination/get_next": {

			controller: "destination",
			method: "getNext",

	 		filters: []
	 	}
	},

	"post": {}
}