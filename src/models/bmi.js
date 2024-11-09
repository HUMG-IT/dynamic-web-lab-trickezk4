// Tính chỉ số BMI dựa trên cân nặng và chiều cao, trả về hệ số BMI với 2 số sau dấu phẩy
// 1. Định nghĩa hàm calculateBMI để tính chỉ số BMI:
// - Viết một hàm calculateBMI nhận hai tham số là weight (cân nặng, đơn vị kg) và height (chiều cao, đơn vị cm).
// - Sử dụng công thức tính BMI: BMI = weight / (height / 100)^2.
// - Đảm bảo kết quả của chỉ số BMI được giới hạn ở hai chữ số thập phân bằng .toFixed(2).
const calculateBMI = (weight,height) => {
    // const height = req.body.height;
    // const weight = req.body.weight;
    return parseFloat((weight / (height / 100)**2).toFixed(2));
};
// Phân loại theo chỉ số BMI
// 2. Định nghĩa hàm classifyBMI để phân loại chỉ số BMI:
// - Viết hàm classifyBMI nhận một tham số là bmi, là kết quả từ hàm calculateBMI.
// - Sử dụng các điều kiện để phân loại bmi:
//    - BMI dưới 18.5 là "Gầy".
//    - BMI từ 18.5 đến 24.9 là "Bình thường".
//    - BMI từ 25 đến 29.9 là "Thừa cân".
//    - BMI từ 30 trở lên là "Béo phì".
const classifyBMI = (bmi) => {
    // const bmi = calculateBMI();
    if(bmi >= 0 && bmi < 18.5) 
        // res.json({ message: 'Gầy'});
        return 'Gầy';
    else if(bmi < 24.9)
        // res.json({ message: 'Bình thường'});
        return 'Bình thường';
    else if(bmi < 29.9)
        // res.json({ message: 'Thừa cân'});
        return 'Thừa cân';
    else if(bmi >= 30)
        // res.json({ message: 'Béo phì'});
        return 'Béo phì';
};

// Xuất các hàm calculateBMI và classifyBMI
module.exports = { calculateBMI, classifyBMI };