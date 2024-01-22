//your JS code here. If required.
let root=document.getElementById("root");
// root.innerText="abc"
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let arr=bands.sort();
arr.map((ele)=>{
	let li=document.createElement("li")
	li.innerText=ele;
	root.append(li);
	
})

