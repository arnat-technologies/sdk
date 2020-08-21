import React from "react";
declare function deviceDetect(): any;
declare const AndroidView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const BrowserView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const IEView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const IOSView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const MobileView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const TabletView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const WinPhoneView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const MobileOnlyView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const SmartTVView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const ConsoleView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const WearableView: ({ renderWithFragment, children, viewClassName, style }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
}) => JSX.Element;
declare const CustomView: ({ renderWithFragment, children, viewClassName, style, condition }: {
    renderWithFragment: any;
    children: any;
    viewClassName: any;
    style: any;
    condition: any;
}) => JSX.Element;
declare const isSmartTV: boolean;
declare const isConsole: boolean;
declare const isWearable: boolean;
declare const isMobileSafari: boolean;
declare const isChromium: boolean;
declare const isMobile: boolean;
declare const isMobileOnly: boolean;
declare const isTablet: boolean;
declare const isBrowser: boolean;
declare const isAndroid: boolean;
declare const isWinPhone: boolean;
declare const isIOS: boolean;
declare const isChrome: boolean;
declare const isFirefox: boolean;
declare const isSafari: boolean;
declare const isOpera: boolean;
declare const isIE: boolean;
declare const osVersion: any;
declare const osName: any;
declare const fullBrowserVersion: any;
declare const browserVersion: any;
declare const browserName: any;
declare const mobileVendor: any;
declare const mobileModel: any;
declare const engineName: any;
declare const engineVersion: any;
declare const getUA: any;
declare const isEdge: boolean;
declare const isYandex: boolean;
declare const deviceType: any;
declare const isIOS13: boolean;
declare const isIPad13: boolean;
declare const isIPhone13: boolean;
declare const isIPod13: boolean;
declare const isElectron: boolean;
interface IWithOrientationChange {
    isLandscape?: boolean;
    isPortrait?: boolean;
}
declare function withOrientationChange(WrappedComponent: any): {
    new (props: any): {
        isEventListenerAdded: boolean;
        handleOrientationChange(): void;
        onOrientationChange(): void;
        onPageLoad(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isLandscape" | "isPortrait">(state: IWithOrientationChange | ((prevState: Readonly<IWithOrientationChange>, props: Readonly<{}>) => IWithOrientationChange | Pick<IWithOrientationChange, K>) | Pick<IWithOrientationChange, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<IWithOrientationChange>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<IWithOrientationChange>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<IWithOrientationChange>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<IWithOrientationChange>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<IWithOrientationChange>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<IWithOrientationChange>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export { deviceDetect, AndroidView, BrowserView, IEView, IOSView, MobileView, TabletView, WinPhoneView, MobileOnlyView, SmartTVView, ConsoleView, WearableView, CustomView, isSmartTV, isConsole, isWearable, isMobileSafari, isChromium, isMobile, isMobileOnly, isTablet, isBrowser, isAndroid, isWinPhone, isIOS, isChrome, isFirefox, isSafari, isOpera, isIE, osVersion, osName, fullBrowserVersion, browserVersion, browserName, mobileVendor, mobileModel, engineName, engineVersion, getUA, isEdge, isYandex, deviceType, isIOS13, isIPad13, isIPhone13, isIPod13, isElectron, withOrientationChange };
