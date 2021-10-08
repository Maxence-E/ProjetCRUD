function myFunction(idAdv) {
    var moreText = document.getElementById("details_"+idAdv);
    var btnText = document.getElementById("detailsBtn_"+idAdv);
  
    
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Learn less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Learn more";
      moreText.style.display = "none";
    }
  }

  $("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

$(".table tbody td a.deleteUser").click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `http://localhost:3000/api/users/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})

