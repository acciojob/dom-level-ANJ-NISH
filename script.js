//your JS code here. If required.
let ele=document.getElementById("level");

let level=2;

while(ele && ele.parentElement.tagName !== html)
	{
		level++;
		ele=ele.parentElement;
	}

alert(`The level of the element is: ${level}`);