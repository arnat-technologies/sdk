# a-dialog



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                                                                              | Type      | Default |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------- |
| `label`    | `label`     | The dialog's label as displayed in the header. You should always include a relevant label even when using `no-header`, as it is required for proper accessibility.       | `string`  | `''`    |
| `noHeader` | `no-header` | Set to true to disable the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the dialog. | `boolean` | `false` |
| `open`     | `open`      | Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods.                                                                          | `boolean` | `false` |


## Events

| Event              | Description                                                                                                 | Type               |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| `slAfterHide`      | Emitted after the dialog closes and all transitions are complete.                                           | `CustomEvent<any>` |
| `slAfterShow`      | Emitted after the dialog opens and all transitions are complete.                                            | `CustomEvent<any>` |
| `slHide`           | Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed.         | `CustomEvent<any>` |
| `slOverlayDismiss` | Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the dialog from closing. | `CustomEvent<any>` |
| `slShow`           | Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened.          | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the dialog

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the dialog

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part             | Description |
| ---------------- | ----------- |
| `"base"`         |             |
| `"body"`         |             |
| `"close-button"` |             |
| `"footer"`       |             |
| `"header"`       |             |
| `"overlay"`      |             |
| `"panel"`        |             |
| `"title"`        |             |


## CSS Custom Properties

| Name      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `--width` | The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
