import { useState } from 'react'; // Sửa lỗi 1: Thiếu useState
import Alert from '../components/Alert'; // Sửa lỗi 2: Thêm ../ để ra khỏi thư mục pages
import Button from '../components/Button'; // Sửa lỗi 3: Import Button để sử dụng

function Bai3AlertPage() {
  const [alertType, setAlertType] = useState('success');
  const [message, setMessage] = useState('Chào mừng bạn đến với Dashboard!');

  const showAlert = (type, msg) => {
    setAlertType(type);
    setMessage(msg);
  };

  return (
    <div className="page-content">
      <h2>Bài 3: Alert Notification</h2>
      <Alert type={alertType}>{message}</Alert>   
      <div className="button-group" style={{ marginTop: '20px' }}>
        <Button 
          type="primary" 
          onClick={() => showAlert('success', 'Bạn đã mua thành công!')}
        >
          Mua ngay
        </Button>

        <Button 
          type="success" 
          onClick={() => showAlert('warning', 'Bạn đang đến với trang thanh toán')}
        >
          Thanh Toán
        </Button>

        <Button 
          type="danger" 
          onClick={() => showAlert('error', 'Hết hàng rồi bạn ơi!')}
        >
          Hết hàng
        </Button>
      </div>
    </div>
  );
}

export default Bai3AlertPage;