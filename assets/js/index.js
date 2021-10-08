

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

