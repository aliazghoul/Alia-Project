//var container= document.querySelector('.container')

// var container= $('.container');

// vard cards = [
// {name: 
// img: },
// {name: 
// img: },
// {name: 
// img: },
// {name: 
// img: },

// ]


// function create (){
// 	for(var i=0;i<cards.length;i++){
// var card= $('<img>')
// card.attr('src','default.jpg');
// card.attr('data-id','i');
// 	}
// }



var x=1;

var cards = [
  [1, 2,1,2],
  [3, 4,3,4],
  [5, 6,5,6],
  [7, 8,7,8], 
];

function card_value(b_id){
 
     var first=b_id.charAt(1);
	 var second=b_id.charAt(2);
     return cards[first][second]


}

function run(button_id) {
    if (x==1){
	  
	  x1= card_value(button_id);
	  document.getElementById("fnum").innerHTML="First Choice:"+x1;
	  x+=1;
	  }
	 else
	 {
	  x=1;
	  x2=card_value(button_id);
	  document.getElementById("snum").innerHTML="Second Choice:"+x2;
	if (x1 == x2 ) 
	  document.getElementById("result").innerHTML="--You Win--";
	else
	  document.getElementById("result").innerHTML="--You Lose--";

     }

	 
  }


