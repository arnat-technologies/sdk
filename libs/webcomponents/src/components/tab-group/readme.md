# a-tab-group



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                | Type                                     | Default |
| ----------- | ----------- | -------------------------- | ---------------------------------------- | ------- |
| `placement` | `placement` | The placement of the tabs. | `"bottom" \| "left" \| "right" \| "top"` | `'top'` |


## Events

| Event       | Description                   | Type               |
| ----------- | ----------------------------- | ------------------ |
| `slTabHide` | Emitted when a tab is hidden. | `CustomEvent<any>` |
| `slTabShow` | Emitted when a tab is shown.  | `CustomEvent<any>` |


## Methods

### `show(panel: string) => Promise<void>`

Shows the specified tab panel.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part                     | Description |
| ------------------------ | ----------- |
| `"active-tab-indicator"` |             |
| `"base"`                 |             |
| `"body"`                 |             |
| `"nav"`                  |             |
| `"tabs"`                 |             |


## CSS Custom Properties

| Name                  | Description                                  |
| --------------------- | -------------------------------------------- |
| `--tabs-border-color` | The color of the border that separates tabs. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
