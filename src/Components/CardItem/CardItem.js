import React from 'react'
import classNames from 'classnames/bind'
import  {Link} from 'react-router-dom'

import style from './CardItem.module.scss'

const cx = classNames.bind(style)

function CardItem({value}) {

  return (
    <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('img')}>
              <img src='https://product.hstatic.net/1000026716/product/hw_r3_74803326b0484b748cc7525f0530fbea_large.png' alt=''/>
              <div className={cx('popup')}>
                <Link>Click xem chi tiết</Link>
                <Link>Đặt hàng</Link>
              </div>
            </div>
            <h2>{value.attributes.name}</h2>
            <div className={cx('price')}>
                <del>{value.attributes.oldPrice} ₫</del>
                <span>{value.attributes.price} ₫</span>
            </div>
        </div>
    </div>
  )
}

export default CardItem