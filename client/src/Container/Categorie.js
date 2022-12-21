import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Categorie() {
  const {id}=useParams()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("/categorie/"+id,{
      method:'get',
    }).then(res=> res.json())
    .then(data=>{
      console.log("click",data);
      setProducts(data.pro)
      setCategories(data.cat)
    })  
  
  }, [])
  
  return (
    <div className='myCard'>
           <ul className="collection with-header">
        <li className="collection-header"><h4>{id} ({categories.length})</h4></li>
        {
      products.map(prod=>{
        return(
          <li className="collection-item order" >
            <Link to={"/subcategorie/"+prod._id}>
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

export default Categorie