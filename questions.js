

document.write(`<h3>Q1: Get element of id “main-content” and assign them in a variable.</h3>`)

var idOfMainContent = document.getElementById("main-content")
console.log(idOfMainContent);

document.write(`<h3>Q2: Display all child elements of “main-content” element.</h3>`)
var parent = document.querySelector("#main-content")
document.write(`<p>Ans: ${parent.children[0]}<br>
  2. ${parent.children[1]}<br>
  3. ${parent.children[2]}<br>
  4. ${parent.children[3]}<br>
  5. ${parent.children[4]}<br>
`)

document.write(`<h2>Q3: Get all elements of class “render” and show their innerHTML in browser<h3>`)

var renderElements = document.querySelectorAll(".render")
document.write(`<p>Ans: ${renderElements[0].innerHTML}<br>
2. ${renderElements[1].innerHTML}<br>
3. ${renderElements[2].innerHTML}<br>
4. ${renderElements[3].innerHTML}<br>
5. ${renderElements[4].innerHTML}<br></p>`)

document.write(`<h3>Q4:  Fill input value whose element id first-name using javascript. </h3>`)
document.getElementById("first-name").value = "Ahmed"

document.write(`<h3>Q5: Repeat part iv for id ”last-name” and “email” </h3>`)
document.getElementById("last-name").value = "Khan"
document.getElementById("email").value = "xyz@gmail.com"

document.write(`<h3>Q5: What is node type of element having id “form-content”</h3>`)
var formContent = document.getElementById("form-content")
var gg = formContent.nodeType
document.write(`<p>Ans: ${gg}</p>`)

document.write(`<h3>Q6: Show node type of element having id “lastName” and its child node.</h3>`)
var lastName = document.getElementById("lastName")
var nodeTypeQ6 = lastName.nodeType
var childNodeQ6 = lastName.childNodes
document.write(`<p>Ans: ${nodeTypeQ6} <br> ${childNodeQ6}`)
console.log(lastName.childNodes);

document.write(`<h3>Q7: Update child node of element having id “lastName”.</h3>`)
var childNodeQ7 = childNodeQ6.innerText = "Updated innerText of child Node"
document.write(childNodeQ7);

document.write(`<h3>Q8Get First and last child of id “main-content”.</h3>`)
document.write(`<p>Ans: ${idOfMainContent.firstElementChild.innerHTML} <br>
${idOfMainContent.lastElementChild.innerHTML}</p>`)

document.write(`<h3>Q9: Get next and previous siblings of id “lastName”.</h3>`)
var lastNameID = document.getElementById("lastName")
document.write(`<p>Ans: ${lastNameID.previousElementSibling.innerHTML}<br>
${lastNameID.nextElementSibling.innerHTML}</p>`)

document.write(`<h3>Q10: Get parent node and node type of element having id “email”</h3>`)

var emailId = document.getElementById("email")
document.write(`<p>Ans: ${emailId.parentNode.innerHTML}<br>
${emailId.nodeType}</p>`)