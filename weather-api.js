var request = require( 'request' );

var query = process.argv[ 2 ];

request( 'https://www.metaweather.com/api/location/search?query=' + query , function ( error , response , body ) {

		if ( error ) {
			console.log( "error occurred " , error );
		}
			// if request was successful
		else if ( response.statusCode === 200 ) {
			console.log( body );
			var data = JSON.parse( body );
			var weatherId = data[ 0 ][ 'woeid' ];
			//console.log( 'weather id ' , weatherId );

			request( 'https://www.metaweather.com/api/location/' + weatherId + '/' , function ( error , response , body ) {

					if( response.statusCode === 200 ) {
						//console.log( body );
						var data = JSON.parse( body );
						var temp = data.consolidated_weather[ 0 ][ 'the_temp' ];
						console.log( 'Temperature in ' , query , ' is ' , temp );
					}
			});





		}
});