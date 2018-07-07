
var names = ["William Shakespeare", "Christopher Marlowe", "Thomas Middleton", "John Webster", "John Ford"];

function compare(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

var sorted = names.sort(compare);
console.log(sorted);

var ol = document.createElement('ol');
document.getElementById('alphaList').appendChild(ol);

sorted.forEach(function(name) {
  var li = document.createElement('li');
  ol.appendChild(li);
  li.innerHTML += name;
})

