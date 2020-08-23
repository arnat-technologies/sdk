# a-animation



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                                                                                                          | Type                                                          | Default     |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------- |
| `delay`          | `delay`           | The number of milliseconds to delay the start of the animation.                                                                                                                                                                                                                                      | `number`                                                      | `0`         |
| `direction`      | `direction`       | Determines the direction of playback as well as the behavior when reaching the end of an iteration.                                                                                                                                                                                                  | `"alternate" \| "alternate-reverse" \| "normal" \| "reverse"` | `'normal'`  |
| `duration`       | `duration`        | The number of milliseconds each iteration of the animation takes to complete.                                                                                                                                                                                                                        | `number`                                                      | `1000`      |
| `easing`         | `easing`          | The rate of the animation's change over time.                                                                                                                                                                                                                                                        | `string`                                                      | `'linear'`  |
| `endDelay`       | `end-delay`       | The number of milliseconds to delay after the active period of an animation sequence.                                                                                                                                                                                                                | `number`                                                      | `0`         |
| `fill`           | `fill`            | Sets how the animation applies styles to its target before and after its execution.                                                                                                                                                                                                                  | `"auto" \| "backwards" \| "both" \| "forwards" \| "none"`     | `'auto'`    |
| `iterationStart` | `iteration-start` | The offset at which to start the animation, usually between 0 (start) and 1 (end).                                                                                                                                                                                                                   | `number`                                                      | `0`         |
| `iterations`     | `iterations`      | The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.                                                                                                                                                                                                 | `number`                                                      | `Infinity`  |
| `keyframes`      | --                | The keyframes to use for the animation. If this is set, `name` will be ignored.                                                                                                                                                                                                                      | `Keyframe[]`                                                  | `undefined` |
| `name`           | `name`            | The name of the animation to use.                                                                                                                                                                                                                                                                    | `string`                                                      | `'none'`    |
| `pause`          | `pause`           | Pauses the animation. The animation will resume when this prop is removed.                                                                                                                                                                                                                           | `boolean`                                                     | `false`     |
| `playbackRate`   | `playback-rate`   | Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This value can be changed without causing the animation to restart. | `number`                                                      | `1`         |


## Events

| Event     | Description                                    | Type               |
| --------- | ---------------------------------------------- | ------------------ |
| `aCancel` | Emitted when the animation is canceled.        | `CustomEvent<any>` |
| `aFinish` | Emitted when the animation finishes.           | `CustomEvent<any>` |
| `aStart`  | Emitted when the animation starts or restarts. | `CustomEvent<any>` |


## Methods

### `cancel() => Promise<void>`

Clears all KeyframeEffects caused by this animation and aborts its playback.

#### Returns

Type: `Promise<void>`



### `finish() => Promise<void>`

Sets the playback time to the end of the animation corresponding to the current playback direction.

#### Returns

Type: `Promise<void>`



### `getAnimationNames() => Promise<void>`

Gets a list of all supported animation names.

#### Returns

Type: `Promise<void>`



### `getCurrentTime() => Promise<number>`

Gets the current time of the animation in milliseconds.

#### Returns

Type: `Promise<number>`



### `getEasingNames() => Promise<void>`

Gets a list of all supported easing function names.

#### Returns

Type: `Promise<void>`



### `setCurrentTime(time: number) => Promise<void>`

Sets the current time of the animation in milliseconds.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
