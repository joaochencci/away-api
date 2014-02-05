module.exports = {

	"prefix": "/api",
	
	"get": {

		"/hello/world": {

			controller: "hello",
			method: "world",

	 		filters: []
	 	},

		"/destination/next": {

			controller: "destination",
			method: "getNext",

	 		filters: ['authenticated']
	 	},

		"/user/login": {

			controller: "user",
			method: "login",

	 		filters: []
	 	},

		"/user/update": {

			controller: "user",
			method: "update",

	 		filters: ['authenticated']
	 	}
	},

	"post": {
		
		"/destination/create": {

			controller: "destination",
			method: "create",

	 		filters: ['authenticated']
	 	},
	}
}