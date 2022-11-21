import { NavBar, Footer, Transactions, Welcome, Services } from './components'

const App = () => {

  return (
      <div className='min-h-screen'>
        <div className="gradient-bg-welcome">
          <NavBar></NavBar>
          <Welcome></Welcome>
        </div>
        <Services></Services>
        <Transactions></Transactions>
        <Footer></Footer>
      </div>
  )
}

export default App
