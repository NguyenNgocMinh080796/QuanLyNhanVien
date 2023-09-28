import Axios from 'axios'
import { DOMAIN_QUAN_LY_NHAN_VIEN, LAY_DANH_SACH_NHAN_VIEN, LAY_THONG_TIN_NHAN_VIEN } from '../type/NhanVienType'
import { SHOW_MODAL } from '../type/ModalType'
import DetailNhanVien from '../../component/QuanLyNhanVien/DetailNhanVien'

export const LayDanhSachNhanVienAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_NHAN_VIEN}LayDanhSachNhanVien`,
            method: 'GET'
        })
        promise.then((res) => {
            // console.log('danhSachNV', res.data)
            dispatch({
                type: LAY_DANH_SACH_NHAN_VIEN,
                danhSachNhanVien: res.data
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const LayThongTinNhanVienAction = (maNhanVien) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_NHAN_VIEN}LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
            method: 'GET'
        })
        promise.then((res) => {
            // console.log('thongTinNhanVien', res.data)
            dispatch({
                type: LAY_THONG_TIN_NHAN_VIEN,
                thongTinNhanVien: res.data
            })
            dispatch({
                type: SHOW_MODAL,
                componentAction: <DetailNhanVien />
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const ThemNhanVienAction = (values) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_NHAN_VIEN}ThemNhanVien`,
            method: 'POST',
            nhanVien: {
                "maNhanVien": Number(values.maNhanVien),
                "tenNhanVien": values.tenNhanVien,
                "chucVu": values.chucVu,
                "heSoChucVu": Number(values.heSoChucVu),
                "luongCoBan": Number(values.luongCoBan),
                "soGioLamTrongThang": Number(values.soGioLamTrongThang),
            }
        })
        promise.then((res) => {
            // console.log('Thêm thành công')
            dispatch(LayDanhSachNhanVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const XoaNhanVienAction = (maNhanVien) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_NHAN_VIEN}XoaNhanVien?maSinhVien=${maNhanVien}`,
            method: 'DELETE',
        })
        promise.then((res) => {
            dispatch(LayDanhSachNhanVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
export const SuaNhanVienAction = (values) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN_QUAN_LY_NHAN_VIEN}CapNhatThongTinNhanVien?maNhanVien=${values.maNhanVien}`,
            method: 'PUT',
            nv: {
                "maNhanVien": Number(values.maNhanVien),
                "tenNhanVien": values.tenNhanVien,
                "chucVu": values.chucVu,
                "heSoChucVu": Number(values.heSoChucVu),
                "luongCoBan": Number(values.luongCoBan),
                "soGioLamTrongThang": Number(values.soGioLamTrongThang),
            }
        })
        promise.then((res) => {
            dispatch(LayDanhSachNhanVienAction())
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}