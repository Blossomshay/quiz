/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4result = $("#question4").val();
        var totalScore;
        totalScore= CalculateQuestion1Score(q1Result);
        totalScore= totalScore + CalculateQuestion1Score(q2Result)
         totalScore= totalScore + CalculateQuestion1Score(q3Result)
         totalScore=totalScore + CalculateQuestionScore(q4Result)
        console.log ("YEOO")
        placement(totalScore, $("#name").val
          }); 
          
        if var
        
        
  

});
