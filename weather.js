//callFunction();
var searchbar = document.getElementById("myInput");
searchbar.addEventListener("search", function display(main) {
   getWeatherData(searchbar.value);
})



function getWeatherData(city) {
	var url = fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=d6ba1102204646af70341c693f3b61f4&units=metric", {
           method: "GET",
       })
       .then(function (response) {
           if (response.ok)
               return response.json()
       })
       .then(function (json) {
           main = json;
           console.log(main);

           display(main)
           showPage()
		   
       })
       .catch(function (error) {
           console.log(error);
       })
	
}
function display(main){
var tempDiv = document.getElementById("temprature");
   var cityDiv = document.getElementById("location");
   var currentWeather = document.getElementById("display");
   var timeSlot = document.getElementById("timingTable");


   tempDiv.innerHTML = '';
   cityDiv.innerHTML = '';
   currentWeather.innerHTML = '';
   timeSlot.innerHTML = '';



   var city = main.city.name;
   var cityname = document.createElement('h1');
   cityname.innerHTML = city;



   var navTime = main.list["0"].dt_txt;
   var timeCurrent = document.createElement('a');
   timeCurrent.innerHTML = navTime

   var temp = main.list[0].main.temp;
   var div = document.createElement('h1');
   div.innerHTML = temp + '°C' + ' ';

   var dec = main.list["0"].weather["0"].main;
   var current = document.createElement('h2');
   current.innerHTML = ' ' + ' | ' +dec ;


   tempDiv.appendChild(div);
   cityDiv.appendChild(cityname);
   currentWeather.appendChild(current);


   for (var i = 0; i < 9; i++) {
       var tr = document.createElement('tr');
       var diffrentTime = main.list[i].dt_txt;
       var div = document.createElement('td');
       div.innerHTML = diffrentTime;
       tr.appendChild(div);

       var timeTemp = main.list[i].main.temp;
       var div = document.createElement('td');
       div.innerHTML = timeTemp + '°C';
      tr.appendChild(div);

       var timeWind = main.list[i].wind.speed;
       var div = document.createElement('td');
       div.innerHTML = timeWind + 'm/s';
      tr.appendChild(div);

       var situation = main.list[i].weather[0].main;
       var div = document.createElement('td');
       var icon = setWeatherIcon(situation);
       div.appendChild(icon);
       tr.appendChild(div);

timeSlot.append(tr)

   }
}



function setWeatherIcon(weather) {
   var icon = document.createElement('i');
   icon.classList.add('wi');
   icon.classList.add('every-day-weather');
   if (weather == 'Clouds') {
     icon.classList.add('wi-day-cloudy');
   }
   if (weather == 'Rain') {
     icon.classList.add('wi-day-rain');
   }if (weather == 'Clear') {
     icon.classList.add('wi-day-sunny');
   }if (weather == 'Snow') {
     icon.classList.add('wi-day-snow');
   }
   return icon;
}



function showPage() {
   document.getElementById("showPage").style.display = "block";
   document.getElementById("myDiv").style.display = "none";
}











//function callFunction() {
//	var btn = document.getElementById("btn");
//	btn.addEventListener("click", function () {
//		var city = document.getElementById("city").value;
//		getWeatherData(city)
//	})
//
//}





//function display(data) {
//	//display.innerHTML = "" ;
//	
//	//var array = [];
////	first.innerHTML = "";
////	second.innerHTML = "";
////	third.innerHTML="";
////	forth.innerHTML="";
//		
//		var container=document.getElementById("container")
////	if(container.firstChild){
////		console.log(container.firstChild)
////	}
////	else{
////		console.log(container.firstChild)
////	}
//	for (var i=0; i<9; i++) {
//		console.log(data.list[i].main.temp_max)
//		
//		var hour = document.createElement("table");
//		hour.innerHTML = "";
//		var first=document.createElement("p")
//		first.innerHTML=data.list[i].main.temp_max;
//		hour.appendChild(first)
//		
//		
//	console.log(data.list[i].main.temp_min)
//		var second = document.createElement("p")
//		
//		second.innerHTML = data.list[i].main.temp_min;
//		hour.appendChild(second)
//		
//		
//		
//	  console.log(data.list[i].dt_txt)
//		eight = document.createElement("p")
//		second.innerHTML = data.list[i].dt;
//		setTime(data.list[i].dt);
//		hour.appendChild(eight)
//		
//		
//	  console.log(data.list[i].main.temp)
//		third = document.createElement("p")
//		third.innerHTML = data.list[i].main.temp.toFixed(2);
//		hour.appendChild(third)
//		
//		console.log(data.list[i].main.humidity)
//		fourth=document.createElement("p")
//		fourth.innerHTML = data.list[i].main.humidity;
//		hour.appendChild(fourth)
//		
//		
//		console.log(data.list[i].main.pressure)
//		sixth=document.createElement("p")
//		sixth.innerHTML = data.list[i].main.pressure.toFixed(2);
//		hour.appendChild(sixth)
//		
////		console.log(data.list[i].main.sea_level)
////		seventh=document.createElement("p")
////		seventh.innerHTML = data.list[i].main.sea_level.toFixed(2);
////		hour.appendChild(seventh)
//		container.appendChild(hour)
//	}}
		


//function setTime(time) 
//
//{     return new Date(time * 1000).getHours() 
//	+ ":00";      
//
//}
//
//
//function showError(city) {
//	console.log(city + "is not found");
//	document.getElementById("alert-p").innerHTML = city + "is not found";
//}
//
//
//
//function showPage() {
//    var x = document.getElementById("myDIV");
//	console.log(x.style.display=="none")
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//}