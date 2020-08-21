import React from 'react';

import { isMobile } from './selectors';

interface IWithOrientationChange {
  isLandscape?: boolean;
  isPortrait?: boolean;
}

function withOrientationChange(WrappedComponent) {
  // TODO: check PascalCase on compilation time
  return class WithOrientationChange extends React.Component<{}, IWithOrientationChange> {
    isEventListenerAdded: boolean;

    constructor(props) {
      super(props);

      this.isEventListenerAdded = false;

      this.handleOrientationChange = this.handleOrientationChange.bind(this);
      this.onOrientationChange = this.onOrientationChange.bind(this);
      this.onPageLoad = this.onPageLoad.bind(this);

      this.state = {
        isLandscape: false,
        isPortrait: false,
      };
    }

    handleOrientationChange() {
      if (!this.isEventListenerAdded) {
        this.isEventListenerAdded = true;
      }

      const orientation = window.innerWidth > window.innerHeight ? 90 : 0;

      this.setState({
        isPortrait: orientation === 0,
        isLandscape: orientation === 90,
      });
    }

    onOrientationChange() {
      this.handleOrientationChange();
    }

    onPageLoad() {
      this.handleOrientationChange();
    }

    componentDidMount() {
      if (typeof window !== undefined && isMobile) {
        if (!this.isEventListenerAdded) {
          this.handleOrientationChange();
          window.addEventListener('load', this.onPageLoad, false);
        } else {
          window.removeEventListener('load', this.onPageLoad, false);
        }

        window.addEventListener('resize', this.onOrientationChange, false);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onOrientationChange, false);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isLandscape={this.state.isLandscape}
          isPortrait={this.state.isPortrait}
        />
      );
    }
  };
}

export { withOrientationChange };
