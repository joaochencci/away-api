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
	 	},

		"/user/create": {

			controller: "user",
			method: "create",

	 		filters: []
	 	},

		"/user/update": {

			controller: "user",
			method: "update",

	 		filters: []
	 	}
	},

	"post": {}
}