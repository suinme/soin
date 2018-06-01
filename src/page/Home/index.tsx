import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadableHomePage = Loadable({
    loader: () => import('./container'),
    loading: ((props:any) => null)
})

export default LoadableHomePage;