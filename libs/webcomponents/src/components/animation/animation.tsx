import {
  Method,
  Component,
  h,
  Watch,
  Prop,
  Event,
  Element,
  EventEmitter,
} from '@stencil/core';

import animations from './animations';
import easings from './easings';

@Component({
  tag: 'a-animation',
  styleUrl: 'animation.scss',
  scoped: true,
})
export class Animate {
  /**
   * 1. Own Properties
   */
  animation: Animation;
  hasStarted = false;

  get element() {
    // const slot = this.host.querySelector('slot');
    const slot = this.host.children[0];
    return slot;
    // console.log(slot);
    // return slot.assignedElements({ flatten: true })[0] as HTMLElement;
  }

  /**
   * 2. Reference to host HTML element.
   */
  @Element() host: HTMLElement;

  /**
   * 3. State() variables
   */

  /**
   * 4. Public Property API
   */

  /** The name of the animation to use. */
  @Prop() name = 'none';

  /** The number of milliseconds to delay the start of the animation. */
  @Prop() delay = 0;

  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration. */
  @Prop() direction: PlaybackDirection = 'normal';

  /** The number of milliseconds each iteration of the animation takes to complete. */
  @Prop() duration = 1000;

  /** The rate of the animation's change over time. */
  @Prop() easing = 'linear';

  /** The number of milliseconds to delay after the active period of an animation sequence. */
  @Prop() endDelay = 0;

  /** Sets how the animation applies styles to its target before and after its execution. */
  @Prop() fill: FillMode = 'auto';

  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  @Prop() iterations: number = Infinity;

  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  @Prop() iterationStart = 0;

  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  @Prop({ mutable: true }) keyframes: Keyframe[];

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   */

  /** Pauses the animation. The animation will resume when this prop is removed. */
  @Prop() pause = false;

  @Watch('pause')
  handlePauseChange() {
    this.pause ? this.animation.pause() : this.animation.play();

    if (!this.pause && !this.hasStarted) {
      this.hasStarted = true;
      this.aStart.emit();
    }
  }

  /**
   * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
   * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
   * value can be changed without causing the animation to restart.
   */
  @Prop() playbackRate = 1;

  @Watch('playbackRate')
  handlePlaybackRateChange() {
    this.animation.playbackRate = this.playbackRate;
  }

  // Restart the animation when any of these properties change
  @Watch('delay')
  @Watch('direction')
  @Watch('easing')
  @Watch('endDelay')
  @Watch('fill')
  @Watch('iterations')
  @Watch('iterationStart')
  @Watch('keyframes')
  @Watch('name')
  handleRestartAnimation() {
    this.createAnimation();
  }

  /**
   * 5. Events section
   */

  /** Emitted when the animation is canceled. */
  @Event() aCancel: EventEmitter;

  /** Emitted when the animation finishes. */
  @Event() aFinish: EventEmitter;

  /** Emitted when the animation starts or restarts. */
  @Event() aStart: EventEmitter;

  /**
   * 6. Component lifecycle events
   */
  connectedCallback() {
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
  }
  disconnectedCallback() {
    this.destroyAnimation();
  }
  componentWillLoad() {}
  componentDidLoad() {
    this.createAnimation();
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillRender() {}
  componentShouldRender() {}
  componentDidRender() {}

  /**
   * 7. Listeners
   */

  /**
   * 8. Public methods API
   */

  /** Clears all KeyframeEffects caused by this animation and aborts its playback. */
  @Method()
  async cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }

  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  @Method()
  async finish() {
    try {
      this.animation.finish();
    } catch {}
  }

  /** Gets a list of all supported animation names. */
  @Method()
  async getAnimationNames() {
    // return Object.entries(animations).map(([name]) => name);
  }

  /** Gets a list of all supported easing function names. */
  @Method()
  async getEasingNames() {
    // return Object.entries(easings).map(([name]) => name);
  }

  /** Gets the current time of the animation in milliseconds. */
  @Method()
  async getCurrentTime() {
    return this.animation.currentTime;
  }

  /** Sets the current time of the animation in milliseconds. */
  @Method()
  async setCurrentTime(time: number) {
    this.animation.currentTime = time;
  }

  /**
   * 9. Local methods
   */

  handleAnimationFinish() {
    this.aFinish.emit();
  }

  handleAnimationCancel() {
    this.aCancel.emit();
  }

  createAnimation() {
    const easing = easings.hasOwnProperty(this.easing)
      ? easings[this.easing]
      : this.easing;
    const keyframes = this.keyframes ? this.keyframes : animations[this.name];

    this.destroyAnimation();
    this.animation = this.element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations,
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener('cancel', this.handleAnimationCancel);
    this.animation.addEventListener('finish', this.handleAnimationFinish);

    if (this.pause) {
      this.animation.pause();
    } else {
      this.hasStarted = true;
      this.aStart.emit();
    }
  }

  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener('cancel', this.handleAnimationCancel);
      this.animation.removeEventListener('finish', this.handleAnimationFinish);
      this.animation = null;
      this.hasStarted = false;
    }
  }

  /**
   * 10. render() function
   */
  render() {
    return <slot />;
  }
}
