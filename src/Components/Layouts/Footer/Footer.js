import React from 'react'
import classNames from 'classnames/bind'

import style from './Footer.module.scss'

const cx = classNames.bind(style)

function Footer() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <h3>CÔNG TY TNHH THƯƠNG MẠI GEARVN</h3>
            <h3>EMAIL: CSKH@GEARVN.COM</h3>
            <h3>HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ: <span>(Làm việc từ 08h00 - 21h00)</span></h3>
            <div className={cx('phone')}> 
                <p>
                    <span>Gọi mua hàng</span>
                    <b>0123456789</b>
                </p>
                <p>
                    <span>Hỗ trợ khách hàng</span>
                    <b>0123456789</b>
                </p>
            </div>
            <p>Chính sách bảo hành</p>
            <p>Chính sách thanh toán</p>
            <p>Chính sách giao hàng</p>
            <p>Chính sách bảo mật</p>
            <img src='https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png' alt=''/>
        </div>
        <div className={cx('middle')}>
            <h3>HỆ THỐNG CỬA HÀNG:</h3>
            <h3>SHOWROOM HCM <span>(Làm việc từ 8h00 - 21h00)</span></h3>
            <p>- Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</p>
            <p>- Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ Đức.</p>
            <p>- Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.</p>
            <p>- Địa chỉ 4: 415 An Dương Vương, Phường 10, Quận 6.</p>
            <h3>SHOWROOM HN <span>(Làm việc từ 8h00 - 21h00)</span></h3>
            <p>- Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</p>
            <p>- Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội</p>
            <h3>TRUNG TÂM BẢO HÀNH:</h3>
            <p>- Địa chỉ : 436A/71 đường 3/2, Phường 12, Quận 10, Hồ Chí Minh.</p>

        </div>
        <div className={cx('right')}>

        </div>
    </div>
  )
}

export default Footer