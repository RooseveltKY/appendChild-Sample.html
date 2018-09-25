
var arr= ["apple", "banana", "orange"];
for (var i=0; i<arr.length; i++) {
  var newItem= document.createElement('li');
  //The new list is not attached to anything yet
  var newText= document.createTextNode(arr[i]);
  //The text is also not attached to anything
  newItem.appendChild(newText);
  var position= document.getElementsByTagName('ul')[0];
  //getElementsByTagName takes the tag name 'ul' and takes the first line
  position.appendChild(newItem);
}
//++ is add one to i every time the loop runs
//-- is saying that i is negative each time, so it will be infinite
