import React, {Suspense} from 'react';
import {Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './common/theme'
import StoryBook from './components/StoryBook'

function App() {
  return (
      <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Route path='/story-book' component={StoryBook}/>
          {/*<Route path='/sigh-up' component={SighUp}/>*/}
      </ThemeProvider>
      </Suspense>
  );
}

export default App;
