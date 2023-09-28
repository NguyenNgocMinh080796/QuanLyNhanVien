import { LAY_DANH_SACH_SINH_VIEN } from "../type/SinhVienType"

const initialState = {
    danhSachSinhVien: [],
}

export const SinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_SINH_VIEN: {
            return { ...state, danhSachSinhVien: action.danhSachSinhVien }
        }
        default:
            return { ...state }
    }
}