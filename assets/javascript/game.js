$( document ).ready(function(){

var valueOne = 0;
var valueTwo = 0;
var valueThree = 0;
var valueFour = 0;

var wins = 0;
var losses = 0;
var totalScore = 0;
var targetNumber = 0;

var reset = function(){
    targetNumber=100-Math.floor(Math.random()*50);
    valueOne=(Math.floor(Math.random()*15)+2);
    valueTwo=(Math.floor(Math.random()*19)+2);
    valueThree=(Math.floor(Math.random()*8)+2);
    valueFour=(Math.floor(Math.random()*6)+3);
    totalScore=0;
    $('#totalscore').text(totalScore);
    $('#targetscore').text(targetNumber);
    
}

window.setTimeout(reset(),3000);


$('#crystalone').click(function(){
    totalScore+=valueOne;
    $('#totalscore').html(totalScore);

    if (totalScore>targetNumber){
        alert('You Lose!');
        losses++
        $('#losses').html(losses);
        window.setTimeout(reset(),3000);
        return
    }
    else if (totalScore===targetNumber){
        alert('You win!!!');
        wins++
        window.setTimeout(reset(),3000);
        reset();
    }
});
$('#crystaltwo').click(function(){
    totalScore+=valueTwo;
    $('#totalscore').html(totalScore);

    if (totalScore>targetNumber){
        alert('You Lose!');
        losses++
        $('#losses').html(losses);
        window.setTimeout(reset(),3000);
        return
    }
    else if (totalScore===targetNumber){
        alert('You win!!!');
        wins++
        $('#wins').html(wins);
        window.setTimeout(reset(),3000);
    }
});
$('#crystalthree').click(function(){
    totalScore+=valueFour;
    $('#totalscore').html(totalScore);

    if (totalScore>targetNumber){
        alert('You Lose!');
        losses++
        $('#losses').html(losses);
        window.setTimeout(reset(),3000);
        return
    }
    else if (totalScore===targetNumber){
        alert('You win!!!');
        wins++
        $('#wins').html(wins);
        window.setTimeout(reset(),3000);
    }
});
$('#crystalfour').click(function(){
    totalScore+=valueFour;
    $('#totalscore').html(totalScore);

    if (totalScore>targetNumber){
        alert('You Lose!');
        losses++
        $('#losses').html(losses);
        window.setTimeout(reset(),3000);
        return
    }
    else if (totalScore===targetNumber){
        alert('You win!!!');
        wins++
        $('#wins').html(wins);
        window.setTimeout(reset(),3000);
    }
});

});