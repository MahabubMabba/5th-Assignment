My Project Name Is Dev Stack

Dev Stack is a simple web application where users can explore different web development technologies and build their own technology stack.

Technologies I Used

- React
- TypeScript
- JavaScript
- Tailwind CSS
- React Toastify
- JSON
Features

1. Users can see different technologies with their name, category, rating and difficulty.
2. Users can add technologies to their own stack and remove them anytime.
3. Users get toast messages when they add, remove or try to add a technology again.






1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript.
It makes React code easy to write and understand.

2. What is the difference between props and state?

Props are used to pass data from parent to child component.
State is used to store data that can change in a component.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a component.
I used it to store the selected technologies in my stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run some code after rendering.
In this project, I did not use useEffect to load JSON data. I used fetch and Suspense for loading the data.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.
It helps React update the list correctly.

6. What is conditional rendering?

Conditional rendering means showing different things based on a condition.
I used it in the Stack section. When there is no selected technology, it shows an empty stack message.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from parent to child using props.
A child can send something back by calling a function that the parent gives to the child through props.
