$.ajax({
    method:"GET",
    url:"https://restcountries.eu/rest/v2/lang/en",
    success: function(response){
        $("#countEn").text(response.length)
        for (const country of response) {
            $("#tableEn").append("<tr><td>"+ country.name +"</td><td>"+ country.capital +"</td><td>"+ country.population +"</td><td>"+ country.currencies[0].name +"</td></tr>")
        }
    }
})

$.ajax({
    method:"GET",
    url:"https://restcountries.eu/rest/v2/lang/fr",
    success: function(response){
        $("#countFr").text(response.length)
        for (const country of response) {
            $("#tableFr").append("<tr><td>"+ country.name +"</td><td>"+ country.capital +"</td><td>"+ country.population +"</td><td>"+ country.currencies[0].name +"</td></tr>")
        }
    }
})