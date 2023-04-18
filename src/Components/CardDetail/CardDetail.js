import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'


import Header from '../Layouts/Header'
import style from './CardDetail.module.scss'
import Button from '../Button/Button'

const cx = classNames.bind(style)


function CardDetail() {

  const {id} = useParams()

  const [dataLaptop, setDataLaptop] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:4000/productSale/${id}`)
      .then(res => setDataLaptop(res.data))
      .catch(error => console.log(error))

  }, [])

  return (
    <>
        <Header />
        <div className={cx('wrapper')}>
            <div className={cx('slide-img')}> 
              <img src='https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-lenovo-legion-5-15arh7h-82re0036vn-2_31fa28653a894ef793592b24e5c8b7d8.png' alt=''/>

            </div>
            <div className={cx('detail')}>
              <h2>Laptop gaming Lenovo Legion 5 15ARH7H 82RE0036VN</h2>
              <p>✔ Bảo hành chính hãng 36 tháng. </p>
              <p>✔ Hỗ trợ đổi mới trong 7 ngày. </p>
              <p>✔ Windows bản quyền tích hợp. </p>
              <p>✔ Windows bản quyền tích hợp. </p>
              <hr></hr>
              <p>
                <strong>Quà tặng:</strong>
              </p>
              <p className={cx('strong')}>🎁 Balo Lenovo Legion Recon Gaming.</p>
              <p className={cx('strong')}>🎁 Voucher mua Ram Laptop trị giá 500,000đ ( Từ 01.04 đến 30.04.2023)</p>
              <p className={cx('strong')}>🎁 "Lenovo Week", Tai nghe True Wireless Soundpeats Mac trị giá 890,000đ (Từ 19.04 đến 28.04.2023)</p>
              <hr></hr>
              <h4>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON (<Link>Xem chi tiết</Link>).</h4>
              <form>
                <p>
                  <span>Giá cũ: </span>
                  <del>1200</del>
                </p>
                <p>
                  <span>Giá mới: </span>
                  <span className={cx('price')}>789</span>
                </p>
                <Button text='Đặt hàng' />
              </form>
            </div>
        </div>
    </>
  )
}

export default CardDetail