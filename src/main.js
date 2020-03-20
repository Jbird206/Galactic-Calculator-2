import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Solar } from './planets';

$(document).ready(function(){

  $("#ageButton").click(function(event){
    event.preventDefault();

    const age = $("#age").val();
    const lifeSpan = 82;
    const newWorld = new Solar(age);

    $("#result").append(`<div><center><br> Earthling Age: ${age}<br>Life Span: ${newWorld.lifeSpan}<br><center></div>`);
    $("#result").append(`<div><center><br> Mercurian Age: ${newWorld.mercuryYears(), newWorld.age}<br>Life Span: ${newWorld.lifeSpan}<br>Years Remaining: ${newWorld.death}<center></div><br>`);
    $("#result").append(`<div><center><br> Venusian Age: ${newWorld.age = age, newWorld.venusYears(), newWorld.age}<br>Life Span: ${newWorld.lifeSpan = lifeSpan, newWorld.venusYears(), newWorld.lifeSpan}<br>Years Remaining: ${newWorld.age = age,newWorld.lifeSpan = lifeSpan,newWorld.venusYears(), newWorld.death}<center></div><br>`);
    $("#result").append(`<div><center><br>Martian Age: ${newWorld.age = age, newWorld.marsYears(), newWorld.age}<br>Life Span: ${newWorld.lifeSpan = lifeSpan, newWorld.marsYears(), newWorld.lifeSpan}<br>Years Remaining: ${newWorld.age = age,newWorld.lifeSpan = lifeSpan,newWorld.marsYears(), newWorld.death}<center></div>`);
    $("#result").append(`<div><center><br>Jupiterian Age: ${newWorld.age = age, newWorld.jupiterYears(), newWorld.age}<br>Life Span: ${newWorld.lifeSpan = lifeSpan, newWorld.jupiterYears(), newWorld.lifeSpan}<br>Years Remaining: ${newWorld.age = age,newWorld.lifeSpan = lifeSpan,newWorld.jupiterYears(), newWorld.death}<center></div>`);

    $("#result").append(`<br><center> <button id="reset"><h2>Reset</h2></button><center>`);

    $("#reset").click(function(){
      location.reload(true);
    })

  });

});

