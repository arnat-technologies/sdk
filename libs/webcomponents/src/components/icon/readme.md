# a-icon



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                   | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`  | `label`   | An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. | `string` | `undefined` |
| `name`   | `name`    | The name of the icon to draw.                                                                                 | `string` | `undefined` |
| `src`    | `src`     | An external URL of an SVG file.                                                                               | `string` | `undefined` |


## Events

| Event    | Description                           | Type               |
| -------- | ------------------------------------- | ------------------ |
| `aError` | Emitted when the icon failed to load. | `CustomEvent<any>` |
| `aLoad`  | Emitted when the icon has loaded.     | `CustomEvent<any>` |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


## Dependencies

### Used by

 - [a-avatar](../avatar)

### Graph
```mermaid
graph TD;
  a-avatar --> a-icon
  style a-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
