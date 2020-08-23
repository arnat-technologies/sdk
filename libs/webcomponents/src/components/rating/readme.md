# a-rating



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                          | Type                         | Default                                                    |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------------- |
| `disabled`  | `disabled`  | Disables the rating.                                                                                                                 | `boolean`                    | `false`                                                    |
| `getSymbol` | --          | A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific symbol to a value. | `(value?: number) => string` | `(value?: number) => '<a-icon name="star-fill"></a-icon>'` |
| `max`       | `max`       | The highest rating to show.                                                                                                          | `number`                     | `5`                                                        |
| `precision` | `precision` | The minimum increment value allowed by the control.                                                                                  | `number`                     | `1`                                                        |
| `readonly`  | `readonly`  | Makes the rating readonly.                                                                                                           | `boolean`                    | `false`                                                    |
| `value`     | `value`     | The current rating.                                                                                                                  | `number`                     | `0`                                                        |


## Events

| Event      | Description                              | Type               |
| ---------- | ---------------------------------------- | ------------------ |
| `slChange` | Emitted when the rating's value changes. | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the rating.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the rating.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"base"` |             |


## CSS Custom Properties

| Name                    | Description                        |
| ----------------------- | ---------------------------------- |
| `--symbol-color`        | The inactive color for symbols.    |
| `--symbol-color-active` | The active color for symbols.      |
| `--symbol-size`         | The size of symbols.               |
| `--symbol-spacing`      | The spacing to use around symbols. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
