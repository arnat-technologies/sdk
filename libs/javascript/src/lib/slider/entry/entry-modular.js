import Anchors from '../src/components/anchors';
import Autoplay from '../src/components/autoplay';
import Breakpoints from '../src/components/breakpoints';
import Build from '../src/components/build';
import Clones from '../src/components/clones';
import Controls from '../src/components/controls';
import Direction from '../src/components/direction';
import Gaps from '../src/components/gaps';
import Html from '../src/components/html';
import Images from '../src/components/images';
import Keyboard from '../src/components/keyboard';
import Move from '../src/components/move';
import Peek from '../src/components/peek';
import Resize from '../src/components/resize';
import Run from '../src/components/run';
import Sizes from '../src/components/sizes';
import Swipe from '../src/components/swipe';
import Transition from '../src/components/transition';
import Translate from '../src/components/translate';
import Core from '../src/index';

const COMPONENTS = {
  Html,
  Translate,
  Transition,
  Direction,
  Peek,
  Sizes,
  Gaps,
  Move,
  Clones,
  Resize,
  Build,
  Run,
};

export { Swipe, Images, Anchors, Controls, Keyboard, Autoplay, Breakpoints };

export default class Glide extends Core {
  mount(extensions = {}) {
    return super.mount(Object.assign({}, COMPONENTS, extensions));
  }
}
