# a-drawer



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                     | Type                                     | Default   |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| `contained` | `contained` | By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this prop and add `position: relative` to the parent. | `boolean`                                | `false`   |
| `label`     | `label`     | The drawer's label as displayed in the header. You should always include a relevant label even when using `no-header`, as it is required for proper accessibility.                              | `string`                                 | `''`      |
| `noHeader`  | `no-header` | Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.                                       | `boolean`                                | `false`   |
| `open`      | `open`      | Indicates whether or not the drawer is open. You can use this in lieu of the show/hide methods.                                                                                                 | `boolean`                                | `false`   |
| `placement` | `placement` | The direction from which the drawer will open.                                                                                                                                                  | `"bottom" \| "left" \| "right" \| "top"` | `'right'` |


## Events

| Event              | Description                                                                                                 | Type               |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| `slAfterHide`      | Emitted after the drawer closes and all transitions are complete.                                           | `CustomEvent<any>` |
| `slAfterShow`      | Emitted after the drawer opens and all transitions are complete.                                            | `CustomEvent<any>` |
| `slHide`           | Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed.         | `CustomEvent<any>` |
| `slOverlayDismiss` | Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing. | `CustomEvent<any>` |
| `slShow`           | Emitted when the drawer opens. Calling `event.preventDefault()` will prevent it from being opened.          | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the drawer

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the drawer

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

| Name     | Description                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--size` | The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
