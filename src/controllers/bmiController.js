// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');
// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification
const getBMI = (req, res) => {
    // const bmi = bmi.calculateBMI(req.body.weight, req.body.height);
    // const classification = classifyBMI(bmi); 
    const { height, weight } = req.body;
    const bmi =  calculateBMI(weight,height);
    const classification = classifyBMI(bmi);
    res.json({  bmi: bmi, classification: classification }); 
};
// Xuất hàm getBMI
module.exports = { getBMI };
// Lưu ý: Tham khảo mã trong tệp nameController.js
