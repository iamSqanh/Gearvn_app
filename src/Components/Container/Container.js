import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import classNames from 'classnames/bind'

import style from './Container.module.scss'
import Banner from '../Banner'
import CardItem from '../CardItem'


const cx = classNames.bind(style)


function Container() {

    const [dataLaptop, setDataLaptop] = useState([])


    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/products')
            .then(res => setDataLaptop(res.data.data))
            .catch(error => console.log(error))
    }, [])


  return (
    <div className={cx('wrapper')}>
        <div className={cx('banner')}>
        <Banner url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=35745' />
        <Banner url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=35745' />
        <Banner url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=35745' />
        <Banner url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=35745' />
        </div>
        <div className={cx('item')}>
            <div className={cx('titile')}>
                <h2>lap top gaming bán chạy </h2>
                <a>Xem tất cả <MdOutlineArrowForwardIos/></a>
            </div>
            <div className={cx('grid-layout')}>
                {dataLaptop.map((value) => <CardItem key={value.id} value={value}/>)}
            </div>
        </div>
    </div>
  )
}

export default Container