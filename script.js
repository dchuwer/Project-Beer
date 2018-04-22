
var beers = [];
let sortA = false;

function addBeer(name,category,rate){
    var beer = {};
    beer.name = name;
    beer.category = category;
    beer.rate = rate;
    beer.comments = "";
    beers.push(beer);


};
/*  version 1 comment only 
function renderBeers(){
    $(".beers-list li").remove();
    for(let i=0; i<beers.length ; i++){
        
        $(".beers-list").append("<li>" + beers[i].name + " " + beers[i].category + 
        " " + beers[i].rate +"<span>" + beers[i].comments+ "</span>" + " <button class='delButton'>Delete</button>"
         + "<button class='commentsButton'>Comments</button> </li>")
        if(beers[i].comments != ""){
            $(".commentsButton").remove()
            $(".beers-list li").eq(i).append("<button class='editCommentsButton'>Edit Comments</button> <button class='deleteCommentsButton'>Del Comments</button>")
        }
    }
*/

function renderBeers(){
    $(".beers-list > li").remove();
    for(let i=0; i<beers.length ; i++){
        /*
        $(".beers-list").append("<li>" + beers[i].name + " " + beers[i].category + 
        " " + beers[i].rate  +
            "<button class='commentsButton'>Comments</button>" +
            "</ul>")*/
            
            $(".beers-list").append("<li>" + beers[i].name + " " + beers[i].category + 
            " " + beers[i].rate  + " <button class='delButton'>Delete</button>"
             + "<ul class='listComments'> " +
                "<button class='commentsButton'>Comments</button>" +
                "</ul>") 
        
        if(beers[i].comments != ""){
            // $(".commentsButton").remove()
            $(".beers-list> li> .listComments").eq(i).append("<li> <span class='spanComments'>" + beers[i].comments+ "</span>"+
             "<button class='editCommentsButton'>Edit Comments</button>"+
             "<button class='deleteCommentsButton'>Del Comments</button>" 
         + "</li'> ")
        }
    }




};

$(".post-beer").click(function (){

    var name = $(".beer-input").val();
    var category = $(".category-input").val();
    var rate = $(".rate-input").val();
    addBeer(name,category, rate);
    renderBeers();

});

$(".sort-beer").click(function () {
         
  
    if (!sortA){
        beers = beers.sort(function(a, b){return a.rate - b.rate});
        sortA = true;
    }
    
    else
    {
        beers = beers.sort(function(a, b){return a.rate + b.rate});
        sortA = false;
    }
 
    

    renderBeers();
})


$(".beers-list").on('click','.delButton', function() {

    beers.splice($(this).parent('li').index(),1);
    
    renderBeers(); 
});

$(".beers-list").on('click','.commentsButton', function() {
    $(this).parent(this).append("<textarea class='comments'> </textarea>");
    //saveComment();
    
    
    $(this).text("save comments");
    $(this).attr( "class", "saveComments" )
        
    $(this).click(function () { 
        beers[($(this).parents('ul.beers-list > li').index())].comments = $('.comments').val()
        renderBeers();
    });
    

   
});

/*
function saveComment(butt){
    $(butt).text("save comments");
    $(butt).attr( "class", "saveComments" )
        
    $(butt).click(function () { 
        beers[($(this).parent('li').index())].comments = $('.comments').val();
        renderBeers();

    });
};
*/

$(".beers-list").on('click','.editCommentsButton', function() {
    
    $(this).parent(this).append("<textarea class='comments'> </textarea>");
   
    $(".comments").val(beers[($(this).parents('ul.beers-list > li').index())].comments);
    //$(this).siblings('.commentsButton').remove();
    $(this).siblings('.spanComments').css({"visibility": "hidden", "display": "none"})
    /
    
    
    //saveComment("'.editCommentsButton'");

    $(this).text("save comments");
    $(this).attr( "class", "saveComments" )
        
    $(this).click(function () { 
        beers[($(this).parents('ul.beers-list > li').index())].comments = $('.comments').val()
        renderBeers();
    }); 


    

});

$(".beers-list").on('click','.deleteCommentsButton', function() {

    beers[($(this).parents('ul.beers-list > li').index())].comments = '';
    renderBeers();

});


