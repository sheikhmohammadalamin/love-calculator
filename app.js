let btn         = document.getElementById("my_btn");
let result = Math.random() * 100;
let finalResult = Math.floor(result) + 1;

btn.addEventListener("click", function(e) {
    e.preventDefault();

   
    let userName    = document.getElementById("user_name").value;
    let partnerName = document.getElementById("partner_name").value;
    if(userName == '' || partnerName == '') {
        alert ("Please! Fill up the form");
    }else{
        let circle = document.getElementById("circle");
        circle.innerHTML = userName + " and " + partnerName + "'s " + "love Percentage is: " +  finalResult + "%" ;
    
    }
  
}) ;

