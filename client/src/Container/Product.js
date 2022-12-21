import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Product() {
  const {id}=useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("/product/"+id,{
      method:'get',
    }).then(res=> res.json())
    .then(data=>{
      console.log(data);
      //setCategories(data.cat)
      setProducts(data)
    })
  }, [])

  return (
    <div className='myCard'>   
      
  <div className="card">
  <ul className="collection with-header">
        <li className="collection-header"><h4>{id} ({products.length})</h4></li>
       </ul>
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
        products.map(prod=>{
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

export default Product