$(document).ready(function () {
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
   
    var apptInfo = {
      hour: null,
      subject: null
    };
    var i = 0;
    var letters = "";
    
   for (i=0; i<9; i++) {
      const varName = "currentSubject";
      var currentSubject = 0;
      
      letters = localStorage.getItem("button"+(i+9));
      currentSubject = i+9;
      $("#txtArea"+currentSubject).text(letters)
    }
    
    $(".btn").on("click", function () {
      var buttonClick = "";
      buttonClick = $(this).attr("id");
      var conCurrent = buttonClick; 
      var topicEl = ""
      topicEl = document.getElementById("txtArea".concat(conCurrent.replace("button", ""))).value
     
      apptInfo.hour = buttonClick;
      apptInfo.subject = topicEl;
      localStorage.setItem(apptInfo.hour, JSON.stringify(apptInfo.subject));
    });
  
  })