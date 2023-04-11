import React from 'react'
import classNames from 'classnames/bind'
import style from './Header.module.scss'

import {FaSearch} from 'react-icons/fa'

const cx = classNames.bind(style)


function Header() {
  return (
    <header className={cx('header')}>
        <div className={cx('top')}>
            <div className={cx('logo')}>
                <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=35701' alt=''/>
            </div>
            <div className={cx('search-item')}>
                <div className={cx('search-top')}>
                    <div className={cx('search')}>
                        <input placeholder='Nhập mã hoặc tên sản phẩm...'/>
                        <button><FaSearch/></button>
                    </div>
                    <div className={cx('list-item')}>
                        <ul>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=35701' alt=''/>
                                <span>Đăng ký</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=35701' alt=''/>
                                <span>Đăng nhập</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=35701' alt=''/>
                                <span>Khuyến mãi</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=35701' alt=''/>
                                <span>Giỏ hàng</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('nav')}>
                    <ul>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/tongdai-icon.png?v=35701' alt=''/>
                            <span>Tổng đài</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=35701' alt=''/>
                            <span>Video</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=35701' alt=''/>
                            <span>Tin công nghệ</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=35701' alt=''/>
                            <span>Tuyển dụng</span>
                        </li>
                        <li>
                            <img src='https://file.hstatic.net/200000397757/file/car-dealer_97df9ccd23f243e3a4da757eb19afe6c.png' alt=''/>
                            <span>Hệ thống SHOWROOM</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={cx('bottom')}></div>
    </header>
  )
}

export default Header