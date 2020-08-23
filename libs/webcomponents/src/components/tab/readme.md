# a-tab



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                      | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------ | --------- | ------- |
| `active`   | `active`   | Set to true to draw the tab in an active state.                                                  | `boolean` | `false` |
| `disabled` | `disabled` | Set to true to draw the tab in a disabled state.                                                 | `boolean` | `false` |
| `panel`    | `panel`    | The name of the tab panel the tab will control. The panel must be located in the same tab group. | `string`  | `''`    |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the tab.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus to the tab.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


## CSS Custom Properties

| Name           | Description                  |
| -------------- | ---------------------------- |
| `--focus-ring` | The focus ring's box shadow. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
