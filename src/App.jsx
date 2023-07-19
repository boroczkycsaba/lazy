import { useState } from 'react'
import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import { Images } from './components/Images'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Navbar } from './components/NavBar'
import { Products } from './components/Products'
import { Product } from './components/Product'
import { Faq } from './components/Faq'
import 'bootstrap/dist/css/bootstrap.min.css'



const queryClient= new QueryClient ()

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path='/lazy/' element= {<Home/>}/>
        <Route path='/lazy/about' element= {<About/>}/>
        <Route path='/lazy/images' element= {<Images/>}/>
        <Route path='/lazy/contact' element= {<Contact/>}/>
        <Route path='/lazy/products' element= {<Products/>}/>
        <Route path='/lazy/products/:id' element= {<Product/>}/>
        <Route path='/lazy/faq' element= {<Faq/>}/>
        
        
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
