import './App.css'
import Footer from './Footer'
import Header from './Header'

export const data_list = [
  {
    sale:"",
    name: "Fancy Product",
    star:"",
    price1 : "$40.00 - $80.00",
    price2 : ""
  },
  {
    sale:"sale",
    name: "Special Item",
    star:"star",
    price1 : "$20.00",
    price2 : "$18.00"
  },
  {
    sale:"sale",
    name: "Sale Item",
    star:"",
    price1 : "$50.00",
    price2 : "$25.00"
  },
  {
    sale:"",
    name: "Popular Item",
    star:"star",
    price1 : "$40.00",
    price2 : ""
  },
  {
    sale:"sale",
    name: "Sale Item",
    star:"",
    price1 : "$50.00",
    price2 : "$25.00"
  },
  {
    sale:"",
    name: "Fancy Product",
    star:"",
    price1 : "$120.00 - $280.00",
    price2 : ""
  },
  {
    sale:"",
    name: "Popular Item",
    star:"star",
    price1 : "$40.00",
    price2 : ""
  },
  {
    sale:"sale",
    name: "Special Item",
    star:"star",
    price1 : "$20.00",
    price2 : "$18.00"
  }
]


function App() {

  return (
    <div className='All-Container'>
      <Header/>
      <Footer/>
    </div>
  )
}




export default App