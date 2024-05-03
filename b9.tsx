import React from 'react'
import './B9.css'

export default function B9() {
  return (
    <div>
        <h1>B9</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Họ và tên</th>
      <th scope="col">Ngày sinh</th>
      <th scope="col">Giới tính</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col" style={{textAlign:"center"}}>Hành động</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>QUan le</td>
      <td>21/02/2021</td>
      <td>Nam</td>
      <td>nNghe A</td>
      <td className='btn2'>
        <button>Sửa</button>
        <button style={{backgroundColor:"red"}}>Xóa</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Maria</td>
      <td>11/02/1990</td>
      <td>Nữ</td>
      <td>London</td>
      <td className='btn2'>
        <button>Sửa</button>
        <button style={{backgroundColor:"red"}}>Xóa</button>
      </td>
    </tr>
    
  </tbody>
</table>

    </div>
  )
}
