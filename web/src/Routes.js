// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router pageLoadingDelay={300}>
      <Route path="/form" page={FormPage} name="form" />
      {process.env.NODE_ENV === 'development' && (
        // the style guide should only be accessible in development
        <Route path="/style-guide" page={StyleGuidePage} name="styleGuide" />
      )}
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
