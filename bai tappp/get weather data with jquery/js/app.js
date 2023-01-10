$.get("http://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=a9fcca5227c853275777de48271ae481&units=metric",
        function(api) {
            $('.temp').html('Local Temp: ' + api.main.temp + 'C');
            $('.city').html('City: ' + api.name);
            $('.description').html('Description: ' + api.weather[0].description);

            $('.icon img').attr('src','http://openweathermap.org/img/wn/' + api.weather[0].icon + '.png');

        });