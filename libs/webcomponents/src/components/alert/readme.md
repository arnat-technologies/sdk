# a-alert



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                    | Type                                                        | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `closable` | `closable` | Set to true to make the alert closable.                                                        | `boolean`                                                   | `false`     |
| `open`     | `open`     | Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. | `boolean`                                                   | `false`     |
| `type`     | `type`     | The type of alert.                                                                             | `"danger" \| "info" \| "primary" \| "success" \| "warning"` | `'primary'` |


## Events

| Event         | Description                                                                                        | Type               |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------------ |
| `slAfterHide` | Emitted after the alert closes and all transitions are complete.                                   | `CustomEvent<any>` |
| `slAfterShow` | Emitted after the alert opens and all transitions are complete.                                    | `CustomEvent<any>` |
| `slHide`      | Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed. | `CustomEvent<any>` |
| `slShow`      | Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened.  | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the alert

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the alert.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part             | Description |
| ---------------- | ----------- |
| `"base"`         |             |
| `"close-button"` |             |
| `"icon"`         |             |
| `"message"`      |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
