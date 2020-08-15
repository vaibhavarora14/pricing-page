# Button

Renders a <button>

## API

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| click? function | function passed is trigged when button is clicked |
| style? object   | customize button with your own styles             |

## Example

```jsx
const clickHandler = (event) => console.log("button is clicked");
<Button click={clickHandler}> Click me! </Button>;
```
