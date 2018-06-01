import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadableExplorePage = Loadable({
    loader: () => import('./container'),
    loading: ((props:any) => null)
})

export default LoadableExplorePage;