//your JS code here. If required.
let ele=document.getElementById("level");

let level=1;

while(ele && ele.parentElement.tagName !== HTML)
	{
		level++;
		ele=ele.parentElement;
	}

alert(`The level of the element is: ${level}`);