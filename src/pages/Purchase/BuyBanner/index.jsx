import React from 'react'
import { Wrapper } from './style'
import MiIMg from './1.jpg'
import { Selector } from "antd-mobile";
const BuyBanner = () => {
  return (
    <Wrapper>
          <div className="buy-info" >
            <div className="img" style={{ width: "4rem", height: "4rem" }}>
              <img src={MiIMg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="buy-choose">
              <div className="price">￥5399</div>
              <div className="stock">库存896件</div>
              <div className="chosen-info">
                <span>请选择</span>
                <span className="chosen-color chosen">颜色</span>
                <span className="chose-memo chosen">存储容量</span>
              </div>
            </div>
          </div>
          <div className="color">
            颜色
            <Selector
              options={[
                {
                  label: "经典黑",
                  value: '1'
                },
                {
                  label: "冷杉绿",
                  value: '2'
                }
              ]}
              showCheckMark={false}
              style={{ '--checked-text-color': 'red', '--checked-color': 'pink' }}
            />


          </div>
          <div className="memo">
            容量
            <Selector
              options={[
                {
                  label: "8+256GB",
                  value: '1'
                },
                {
                  label: "12+256GB",
                  value: '2'
                },
                {
                  label: "12+512GB",
                  value: '3'
                }
              ]}
              showCheckMark={false}
              style={{ '--checked-text-color': 'red', '--checked-color': 'pink' }}
            />
          </div>
          <div className="buy-count">
            <span>购买数量</span>
            <span className='chosen-count'>
              <button className="btn-reduce">-</button>
              <span className='count'>1</span>
              <button className="btn-add">+</button>
            </span>
          </div>
          <div className="btn-buy-container">
            <button className="btn-buy">立即购买</button>
          </div>


    </Wrapper>
  )
}

export default BuyBanner
