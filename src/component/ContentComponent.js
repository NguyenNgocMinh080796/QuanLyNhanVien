import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuanLyNhanVienComponent from './QuanLyNhanVien/QuanLyNhanVienComponent'
import DanhSachSinhVien from './QuanLySinhVien/DanhSachSinhVien'

export default function ContentComponent() {
    return (
        <Routes>
            <Route path='/' element={<QuanLyNhanVienComponent />} />
            <Route path='sinhvien' element={<DanhSachSinhVien />} />
        </Routes>
    )
}
