var quotes =[
{"quote":"Life isn’t about getting and having, it’s about giving and being.", "name":"Kevin Kruse"},
{"quote":"Whatever the mind of man can conceive and believe, it can achieve.", "name":"Napoleon Hill"},
{"quote":"Strive not to be a success, but rather to be of value.", "name":"Albert Einstein"},
{"quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "name":"Robert Frost"},
{"quote":"I attribute my success to this: I never gave or took any excuse.", "name":"Florence Nightingale"},
{"quote":"You miss 100% of the shots you don’t take.", "name":"Wayne Gretzky"},
{"quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "name":"Michael Jordan"},
{"quote":"The most difficult thing is the decision to act, the rest is merely tenacity.", "name":"Amelia Earhart"},
{"quote":"Every strike brings me closer to the next home run.", "name":"Babe Ruth"},
{"quote":"Definiteness of purpose is the starting point of all achievement.", "name":"W. Clement Stone"},
{"quote":"We must balance conspicuous consumption with conscious capitalism.", "name":"Kevin Kruse"},
{"quote":"Life is what happens to you while you’re busy making other plans.", "name":"John Lennon"},
{"quote":"We become what we think about.", "name":"Earl Nightingale"},
{"quote":"14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "name":"Mark Twain"},
{"quote":"15.Life is 10% what happens to me and 90% of how I react to it.", "name":"Charles Swindoll"},
{"quote":"The most common way people give up their power is by thinking they don’t have any.", "name":"Alice Walker"},
{"quote":"The mind is everything. What you think you become.", "name":"Buddha"},
{"quote":"The best time to plant a tree was 20 years ago. The second best time is now.", "name":"Chinese Proverb"},
{"quote":"An unexamined life is not worth living.", "name":"Socrates"},
];

var colors = ["#c72923","#116063","#57aefc","#ed674d","#9c5b93", "#4dd3ed", "#000000", "#55515e", "#55515e", "#55515e"];


function generateRandomNumber(){
	return Math.floor((Math.random() * 20) + 1);
}

function generateRandomColor(){
	return Math.floor((Math.random() * 10) + 1);
}

function populate(){
	var id = generateRandomNumber();
	var idColor = generateRandomColor();
	$(".rand-bg").css("background-color", colors[idColor]);
	$("#quote").css("color", colors[idColor]).html('<i class="fa fa-quote-left" aria-hidden="true"></i> '+quotes[id].quote+' <i class="fa fa-quote-right" aria-hidden="true"></i>');
	$("#twitter").css("color", colors[idColor]).html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='+quotes[id].quote+" - "+quotes[id].name+'" data-size="large" target="_blank"><i class="fa fa-twitter-square pull-left" aria-hidden="true"></i></a>');
}

$(document).ready(function(){

	populate();
	
	

	$("#generator").click(function(e){
		populate();
	});
});