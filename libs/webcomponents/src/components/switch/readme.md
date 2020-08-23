# a-switch



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                        | Type      | Default     |
| ---------- | ---------- | -------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Set to true to draw the switch in a checked state. | `boolean` | `false`     |
| `disabled` | `disabled` | Set to true to disable the switch.                 | `boolean` | `false`     |
| `name`     | `name`     | The switch's name attribute.                       | `string`  | `undefined` |
| `value`    | `value`    | The switch's value attribute.                      | `string`  | `undefined` |


## Events

| Event      | Description                                       | Type               |
| ---------- | ------------------------------------------------- | ------------------ |
| `slBlur`   | Emitted when the control loses focus.             | `CustomEvent<any>` |
| `slChange` | Emitted when the control's checked state changes. | `CustomEvent<any>` |
| `slFocus`  | Emitted when the control gains focus.             | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the switch.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the switch.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"base"`    |             |
| `"control"` |             |
| `"label"`   |             |
| `"thumb"`   |             |


## CSS Custom Properties

| Name           | Description               |
| -------------- | ------------------------- |
| `--height`     | The height of the switch. |
| `--thumb-size` | The size of the thumb.    |
| `--width`      | The width of the switch.  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
