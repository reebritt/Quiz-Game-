//var hs=JSON.parse(localStorage.getItem("highScores"))
//alert(hs);

// for (var i = 0; i<hs.length; i++) {
// console.log(hs[i].score)
// console.log(hs[i].initials)

function printHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores"))
    
    highScores.sort(function (a, b) {
        return b.score - a.score
    })

    highScores.forEach(score => {
        var li=document.createElement("li")
        li.textContent=score.initials+score.score
        var ol=document.getElementById("score-list")
        ol.appendChild(li)
    });
}

function clearHighScores () {
    window.localStorage.removeItem("highScores")
    window.location.reload()
}
document.getElementById("clear").onclick=clearHighScores

printHighScores()