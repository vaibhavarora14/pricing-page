# Tabs Component

    Manage multiple `Tab` by showing the content of selected `Tab`

## API

| Name                            | Purpose                                           |
| ------------------------------- | ------------------------------------------------- |
| children: jsx - `Tab` type only | Multiple `Tab` should be passed in children props |

## Example

In below code, content of "First tab" will be shown by default.

```jsx
<Tabs>
  <Tab name="First tab"> /* content to show inside the tab */</Tab>
  <Tab name="Second Tab"> /* content to show inside the tab */</Tab>
  <Tab name="Third Tab"> /* content to show inside the tab */</Tab>
</Tabs>
```

---

<br>

# Tab Component

    Showcases a Tab and it's content

## API

| Name                                           | Purpose                                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------------------ |
| name: string                                   | Name of tab to be displayed on screen                                          |
| selected?: number <br> default - 0 (first tab) | In case, we need `Tab` of our choice to be selected, then we can use this prop |
| children?: jsx                                 | content when tab is selected should be passed in children props                |

## Example

```jsx
<Tab name="First Tab"> /* content to show inside the tab */</Tab>
```

With `selected` attribute, will function properly if wrapped by `Tabs` to manage

```jsx
<Tabs>
  <Tab name="First tab"> /* content to show inside the tab */</Tab>
  <Tab name="Second Tab"> /* content to show inside the tab */</Tab>
  <Tab selected name="Third Tab">
    /* content to show inside the tab */
  </Tab>
</Tabs>
```
