import Axios from 'axios'
import { DOMAIN_QUAN_LY_SINH_VIEN, LAY_DANH_SACH_SINH_VIEN } from '../type/SinhVienType'

export const LayDanhSachSinhVienAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_SINH_VIEN}LayDanhSachSinhVien`,
            method: 'GET'
        })
        promise.then((res) => {
            // console.log('danhSachSV', res.data)
            dispatch({
                type: LAY_DANH_SACH_SINH_VIEN,
                danhSachSinhVien: res.data
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const ThemSinhVienAction = (values) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_SINH_VIEN}ThemSinhVien`,
            method: 'POST',
            sinhVien: {
                "maSinhVien": Number(values.maSinhVien),
                "tenSinhVien": values.tenSinhVien,
                "loaiSinhVien": values.loaiSinhVien,
                "diemRenLuyen": Number(values.diemRenLuyen),
                "email": values.email,
                "soDienThoai": values.soDienThoai,
            }
        })
        promise.then((res) => {
            // console.log('Thêm thành công')
            dispatch(LayDanhSachSinhVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const XoaSinhVienAction = (maSinhVien) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_SINH_VIEN}XoaSinhVien?maSinhVien=${maSinhVien}`,
            method: 'DELETE',
        })
        promise.then((res) => {
            dispatch(LayDanhSachSinhVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const SuaSinhVienAction = (values) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_SINH_VIEN}CapNhatThongTinSinhVien?maSinhVien=${values.maSinhVien}`,
            method: 'PUT',
            sinhVien: {
                "maSinhVien": Number(values.maSinhVien),
                "tenSinhVien": values.tenSinhVien,
                "loaiSinhVien": values.loaiSinhVien,
                "diemRenLuyen": Number(values.diemRenLuyen),
                "email": values.email,
                "soDienThoai": values.soDienThoai,
            }
        })
        promise.then((res) => {
            dispatch(LayDanhSachSinhVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}