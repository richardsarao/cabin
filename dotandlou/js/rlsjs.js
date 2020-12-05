// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://dark-sky.p.rapidapi.com/38.480270,-123.000090?lang=en&units=auto",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "dark-sky.p.rapidapi.com",
// 		"x-rapidapi-key": "0f4b55172emsh360d4527a75d078p1dbcbfjsnb5b69807ad10"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


//weather widgit
	
   window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"WFTVED3HR69KRW50ZR9KWZVV1", //lots of usage? Sign up for your personal key
       location:"Guerneville, CA, US", //enter an addres
       unitGroup:"us", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"Guerneville", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   // var d = document, s = d.createElement('script');
   // s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.src = 'js/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();


// GET /city?city=Guerneville&state=California&country=USA&key={WFTVED3HR69KRW50ZR9KWZVV1}HTTP/1.1
// Host: http://api.airvisual.com/v2