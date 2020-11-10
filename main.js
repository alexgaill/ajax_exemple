
$.ajax({
    type: "GET",
    url: "http://api.weatherstack.com/current",
    data:{
        access_key:"90d8b329ba3ef764a2f8dc8a32ec1152",
        query:"Paris"
    },
    success: function (response) {
        console.log(response);
    },
    error: function(response) {

    }
})

$.ajax({
    type:"GET",
    url: "todo.csv",
}).done(function(response){
    console.log(response)
})
