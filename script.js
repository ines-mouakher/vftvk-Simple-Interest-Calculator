function compute()
{
   // p = document.getElementById("principal").value;
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
  //Check if amount field is empty
   document.getElementById("result").innerHTML 
    =""; 
  if (principal == "") {
     document.getElementById("principal").focus();
      alert("Enter a positive number");
      return false;
    }
    if (principal <=0) {
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
     alert("Enter a positive number");
        return false;
    }
  else {
    document.getElementById("result").innerHTML 
    = "If you deposit <mark>"+  
    principal+"</mark>,<br/>"+
    "at an interest rate of <mark>"+ rate+"%</mark>.<br/>"+
    "You will receive an amount of <mark>"+ interest+"</mark>,<br/>"+
    "in the year <mark>"+ year+"</mark>";
    }
     return true;
};
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        