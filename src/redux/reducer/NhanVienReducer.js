import { LAY_DANH_SACH_NHAN_VIEN, LAY_THONG_TIN_NHAN_VIEN } from "../type/NhanVienType"

const initialState = {
    danhSachNhanVien: [],
    thongTinNhanVien: {},
}

export const NhanVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_NHAN_VIEN: {
            return { ...state, danhSachNhanVien: action.danhSachNhanVien }
        }
        case LAY_THONG_TIN_NHAN_VIEN: {
            return { ...state, thongTinNhanVien: action.thongTinNhanVien }
        }
        default:
            return { ...state }
    }
}
