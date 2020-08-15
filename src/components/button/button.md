# Button

Renders a <button>

## API

| Name                    | Description                                       |
| ----------------------- | ------------------------------------------------- |
| click? function         | function passed is trigged when button is clicked |
| style? object           | customize button with your own styles             |
| data-testid? string     | test id for button                                |
| type? string <br> solid | type of button                                    |

## Example

```jsx
const clickHandler = (event) => console.log("button is clicked");
<Button data-testid="randomButton" click={clickHandler}>
  Click me!
</Button>;
```
