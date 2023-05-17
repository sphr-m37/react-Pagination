import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

import './App.css'
import { Button, Table } from 'react-bootstrap'

export const App = () => {
  const [todos, pending] = useFetch(`https://jsonplaceholder.typicode.com/todos`)

  const [pageSize,setPageSize] =useState(10)
  let pageCount = Math.ceil(todos.length / pageSize)
  pageCount = Array.from(Array(pageCount).keys())
  const [currentPage, setCurrentPage] = useState(1)


  return (<>
    <h1 className='h2 text-center'>Pagination Project</h1>
    <div className='container mt-1'>
      {pending ? <h2 className='bg-primary'>loading items ...</h2> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => {
              if (todo.id <= currentPage * pageSize &&
                todo.id > currentPage * pageSize - pageSize) {
                  return <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ?
                      <Button size='sm' variant="success">Success :)</Button>
                      :
                      <Button size='sm' variant="info">pending:(</Button>
                      }
                    </td>
                </tr>}
            })}
          </tbody>
        </Table>}
      <div className='d-flex justify-content-center'>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pageCount.map((num,index) => <li class="page-item" onClick={()=>setCurrentPage(num+1)} className={index+1 === currentPage ?'active' : ''} ><a class="page-link" href="#">{num +1}</a></li>)}
        </ul>
        </nav>
        <select class="form-select mb-5 w-auto
        " aria-label="Default select example"
        onChange={e=>setPageSize(e.target.value)}
        >
          <option selected value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>
    </div>
  </>
  )
}

// >
// {
//   pageCount.map((num, index) => <span
   


//   >{num + 1}  </span>)
// }