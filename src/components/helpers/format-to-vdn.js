export const  formatToVND = (amount) => {
    if (typeof amount !== 'number' || amount < 0) {
        return 'Số tiền phải là số không âm.';
    }

    var formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    return formattedAmount;
}