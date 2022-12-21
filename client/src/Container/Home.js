import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("/page1",{
      method:'get',
    }).then(res=> res.json())
    .then(data=>{
      console.log(data);
      setCategories(data.all)
      setProducts(data.datas)
    })
  }, [])

  // const product = (id) =>{
  
  // }
//onClick={()=>product(prod._id)}
  return (
    <div className='myCard'>   
      <ul className="collection with-header">
      <li className="collection-header head">Categories <span className=" head">({categories.length})</span></li>
      {
      products.map(prod=>{
        return(
          <li className="collection-item order" >
            <Link to={"/categorie/"+prod._id}>
            {prod._id}
            <span className="badge">({prod.count})</span> 
            </Link> 
          </li>
        )
      })
    }
  </ul>

  <div className="card">
    <table>
        <thead>
          <tr>
             <th></th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>
        <tbody>
      {
       categories.map(prod=>{
        return(
          <tr>
            <td></td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        )
})
}
        </tbody>
    </table>
  </div>
  </div>
  )
}

export default Home