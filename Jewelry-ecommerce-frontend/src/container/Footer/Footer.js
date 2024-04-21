import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Về PNJ</h4>
              <ul>
                <li><a href="#">Tuyển Dụng</a></li>
                <li><a href="#">Xuất khẩu</a></li>
                <li><a href="#">Kinh doanh sỉ</a></li>
                <li><a href="#">Kiểm định kim cương</a></li>
                <li><a href="#">Kiểm định vàng miếng</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Dịch vụ khách hàng</h4>
              <ul>
                <li><a href="#">Mua hàng trả góp</a></li>
                <li><a href="#">Hướng dẫn đo size trang sức</a></li>
                <li><a href="#">Mua hàng trả góp</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Câu chuyện về PNJ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Chích sách </h4>
              <ul>
                <li><a href="#">Chính sách hoàn tiền </a></li>
                <li><a href="#">Chính sách giao hàng</a></li>
                <li><a href="#">Chính sách bảo hành thu dổi</a></li>
                <li><a href="#">Chính sách bảo mật thông tin khách hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Mua hàng trả góp</a></li>
                <li><a href="#">Hướng dẫn đo size trang sức</a></li>
                <li><a href="#">Mua hàng trả góp</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Câu chuyện về PNJ</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Bản quyền ©2024 Đồ án tốt nghiệp <i className="fa fa-heart-o" aria-hidden="true" />  <a href="" target="white"></a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;