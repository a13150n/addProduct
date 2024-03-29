import React, { useMemo } from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTable } from 'react-table';
import { COLOMN } from './colomn';
import './View.css'
function View() {

 const [view, setView]=useState([]);
 useEffect(()=> {
   const getview = async () => {
     const res= await fetch('http://localhost:8080/view');
     const getdata = await res.json();
     setView(getdata.data);
   }
   getview();
 })
 
 
 console.log("view",view);


 const columns = useMemo(()=> COLOMN, [])
 const data = useMemo(()=> view)
  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance


  return (
	<div>
    
<div className='di'>
    <div className='des'>
    <Link to="/add">
						<button type="button" className="addwhite_btn">
							ADD PRODUCTS
						</button>
					</Link>
     <Link to="/">
						<button type="button" className="addwhite_btn">
							LOGOUT
						</button>
					</Link>
          </div>
          <div className='de' >
          
          <h1>PRODUCT LIST</h1>
          <table {...getTableProps()}>
            <thead>
              {
                  headerGroups.map(headerGroups => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {
                  headerGroups.headers.map(( column) => (
                  <th {...column.getHeaderProps}>{column.render('Header')}</th>
                  ))
                }
                
               
              </tr>
                  ))
              }
              
            </thead>
            <tbody {...getTableBodyProps}>
              {
                rows.map(row => {
                  prepareRow(row)
                  return(
                    <tr {...row.getRowProps()}>
                      {
                        row.cells.map( cell => {
                         return(
                          <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                         )
                        })
                      }
                    
                  </tr>
                  )
                })
              }
          
            
            </tbody>

            </table>

        

          </div>
  </div>
  </div>
  )
}

export default View