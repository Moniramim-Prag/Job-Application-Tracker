1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

(a)getElementById("id")

(i)Selects one element by its id.

(ii)Returns a single element.

Example: document.getElementById("myDiv")

(b)getElementsByClassName("class")

(i)Selects all elements with a given class.

(ii)Returns a live HTMLCollection (like an array, but not exactly).

Example: document.getElementsByClassName("box")

(c)querySelector("selector")

(i)Selects the first element that matches a CSS selector.

Example: document.querySelector(".box")

(d)querySelectorAll("selector")

(i)Selects all elements that match a CSS selector.

(ii)Returns a NodeList (can use forEach).

Example: document.querySelectorAll(".box")
2. How to create and insert a new element into the DOM

(a)Create an element:

let div = document.createElement("div");

(b)Add content or attributes:

div.textContent = "Hello World";
div.className = "my-class";

(c)Insert into DOM:

document.body.appendChild(div); // adds at the end of body
 or
document.querySelector("#container").appendChild(div); // adds inside container
3. What is Event Bubbling and how it works

(a)Event Bubbling: Event starts at the target element and bubbles up to parent elements.

Example: Clicking a button inside a div:

(b)Button → div → body → document → window

Use case: Sometimes you want parent elements to also react to child events.
4. What is Event Delegation & why it’s useful

(a)Event Delegation: Attach one event listener on a parent instead of each child.

The event checks which child triggered it using event.target.

Benefits:

(i)Saves memory (less listeners).

(ii)Works for dynamically added elements.
5. Difference between preventDefault() and stopPropagation()
	(a)What it does	                    
	(i)Stops the default browser action	
	(ii)Stops event from bubbling up	
  Example
  (i)Stop a form from submitting: event.preventDefault()
  (ii)Click on button doesn’t trigger parent click handler: event.stopPropagation()
