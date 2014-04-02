<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <script type="text/javascript" src="countobj.js"></script>
    </head>
    <body>
        <div id="time0"><span id="hours0">hh</span> <span id="sep0">:</span> <span id="minutes0">mm</span> <span id="sep00">:</span> <span id="seconds0">ss</span></div>
        <div id="time"><span id="hours">00</span> <span id="sep1">:</span> <span id="minutes">00</span> <span id="sep1">:</span> <span id="seconds">00</span></div>
        <div id="time2"><span id="hours2">00</span> <span id="sep3">:</span> <span id="minutes2">00</span> <span id="sep4">:</span> <span id="seconds2">00</span></div>
        <div id="time3"><span id="hours3">00</span> <span id="sep5">:</span> <span id="minutes3">00</span> <span id="sep6">:</span> <span id="seconds3">00</span></div>
    </body>
    
    <script type="text/javascript">
        function updateLabels (elNameH, elNameM, elNameS, timeSt) {
            var elHours = document.getElementById(elNameH);
            var elMinutes = document.getElementById(elNameM);
            var elSeconds = document.getElementById(elNameS); 
            
            elHours.innerHTML = timeSt.hours;
            elMinutes.innerHTML = timeSt.minutes;
            elSeconds.innerHTML = timeSt.seconds;
        }
        
        ctObj = ctTimeClass ({ doubleZero: true}); 
        updateLabels ('hours', 'minutes', 'seconds', ctObj.getTime());
        
        function updateSecLabel () {
            ctObj.countSeconds();
            updateLabels ('hours', 'minutes', 'seconds', ctObj.getTime());
        }
        //updateSecLabel();
        
        window.setInterval(updateSecLabel, 1000);
        
        ctObj2 = ctTimeClass ({
            ctSec: 900,
            doubleZero: true
        }); 
        
        updateLabels ('hours2', 'minutes2', 'seconds2', ctObj2.getTime());
        
        function updateSecLabel2 () {
            ctObj2.countSeconds();
            updateLabels ('hours2', 'minutes2', 'seconds2', ctObj2.getTime());
        }
        
        window.setInterval(updateSecLabel2, 1000);
        
        
        ctObj3 = ctTimeClass ({
            ctTime: {
                    hours: '08',
                    minutes: 55,
                    seconds: 30
            },
            doubleZero: true
        }); 
        
        updateLabels ('hours3', 'minutes3', 'seconds3', ctObj3.getTime());
        
        function updateSecLabel3 () {
            ctObj3.countSeconds();
            updateLabels ('hours3', 'minutes3', 'seconds3', ctObj3.getTime());
        }
        
        window.setInterval(updateSecLabel3, 1000);
       
    </script>
</html>
