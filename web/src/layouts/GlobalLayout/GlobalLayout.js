import NProgress from 'redwood-nprogress'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <NProgress withSpinner />
      {children}
    </>
  )
}

export default GlobalLayout
