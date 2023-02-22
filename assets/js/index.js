$("#user_add").submit(function(event){
    alert("New User Created Successfully");
})

$(document).ready(function() {
$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data 
    }

    $.ajax(request).done(function(response){
        alert("User Data Updated Successfully");
    })
})

});