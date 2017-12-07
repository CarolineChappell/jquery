var friends = ["Caroline", "Mary Cole", "Bekah", "Catie", "Hannah"]
var colors =["red", "green", "blue"];

function addColorfulFriends() {
    let div = $("#jqueryDiv");
    let x=0;
    for (let i=0; i<friends.length; i++){
        let h1= $("<h1 class='colorName'>").append(friends[i]);
        div.append(h1);
    }
    let button = $("<button class='colorChanger'>").append("change color");
    $(".buttonHolder").append(button);
    $(".colorChanger").click(function() {
        $(".colorName").css("color", colors[x])
        x++;
    })
};