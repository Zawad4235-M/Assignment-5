### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### Answers:

1. **getElementById** returns a single element with the help of the given id. **getElementsByClassName** returns a HTMLCollection of all elements with that class. **querySelector** returns the first element that matches the CSS selector. **querySelectorAll** Returns a NodeList of all elements that match the CSS selector.

2. To create an element we have to use document.createElement. And to insert the new element we have to use appendChild() function which adds the element with a div or a section of a document.

3. **Event Bubbling** is the process where an event starts at the target element and then bubbles up through its ancestors in the DOM hierarchy. If we take a example as by clicking a **button** inside a **div** will first trigger the **button's** click handler, then the parent **div's**, and so on up to document.

4. **Event Delegation** means attaching a single event listener to a parent element to handle events for multiple child elements using event bubbling. It is useful because it can handle dynamically added elements.

5. **preventDefault()** Stops the default behavior of the element. **stopPropagation()** Stops the event from bubbling up to parent elements.