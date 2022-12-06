// Write your code here!

const mainElement = document.getElementById("main");
mainElement.remove()

const bodyElement = document.getElementsByTagName("body");

const newHeader = document.createElement("h1");
newHeader.id =  'victory';
newHeader.textContent = "YOUR-NAME is the champion";
bodyElement.append(newHeader);