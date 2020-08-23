# a-range



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute  | Description                                    | Type                          | Default                               |
| ------------------ | ---------- | ---------------------------------------------- | ----------------------------- | ------------------------------------- |
| `disabled`         | `disabled` | Set to true to disable the input.              | `boolean`                     | `false`                               |
| `max`              | `max`      | The input's max attribute.                     | `number`                      | `100`                                 |
| `min`              | `min`      | The input's min attribute.                     | `number`                      | `0`                                   |
| `name`             | `name`     | The input's name attribute.                    | `string`                      | `''`                                  |
| `step`             | `step`     | The input's step attribute.                    | `number`                      | `1`                                   |
| `tooltip`          | `tooltip`  | The preferred placedment of the tooltip.       | `"bottom" \| "none" \| "top"` | `'top'`                               |
| `tooltipFormatter` | --         | A function used to format the tooltip's value. | `(value: number) => string`   | `(value: number) => value.toString()` |
| `value`            | `value`    | The input's value attribute.                   | `number`                      | `undefined`                           |


## Events

| Event      | Description                               | Type               |
| ---------- | ----------------------------------------- | ------------------ |
| `slBlur`   | Emitted when the control loses focus.     | `CustomEvent<any>` |
| `slChange` | Emitted when the control's value changes. | `CustomEvent<any>` |
| `slFocus`  | Emitted when the control gains focus.     | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the input.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the input.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"base"`    |             |
| `"input"`   |             |
| `"tooltip"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
