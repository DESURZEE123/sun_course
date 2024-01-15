import { FullscreenOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Card, Col, Form, Row, Space } from 'antd'
import { useRef, useState } from 'react'
import HotEditTable from '../../components/HotEditTable'

import './index.less'

const data = require('./date.json')

export default () => {
  const [form] = Form.useForm()
  const [moduleAreaConfigList, setModuleAreaConfigList] = useState(data)
  const boxRef = useRef(null)
  const renderHotItem = (fatherIndex, hotZoneConfigList = []) => {
    return hotZoneConfigList.map((item = {}, index) => {
      const { x, y, w, h, positionId } = item
      // console.log(x, y)

      return (
        <div
          ref={boxRef}
          id={`hotitem${index}`}
          className='hotitem'
          key={`hotitem-${fatherIndex}-${index}`}
          style={{ left: x, top: y, width: w, height: h }}
          onMouseDown={(e) => {
            onHotSpotMove(fatherIndex, index, positionId, e)
          }}
        >
          <span className='id-span'>{positionId}</span>
          <FullscreenOutlined
            className='icon-drag'
            onMouseDown={(e) => {
              onHotSpotDrag(fatherIndex, index, positionId, e)
            }}
          />
        </div>
      )
    })
  }

  // 热区移动
  const onHotSpotMove = (fatherIndex, sonIndex, id, e) => {
    const fatherBox = document.querySelector(`#hotspot${fatherIndex}`) // 父盒子
    const box = document.querySelector(`#hotspot${fatherIndex} #hotitem${sonIndex}`) // 子盒子
    if (!fatherBox || !box) return

    const _offsetWidth = box.offsetWidth
    const _offsetHeight = box.offsetHeight

    let oEvent = e
    oEvent.stopPropagation() // 阻止冒泡
    oEvent.preventDefault() // 阻止浏览器默认行为

    const disX = oEvent.clientX - box.offsetLeft
    const disY = oEvent.clientY - box.offsetTop

    fatherBox.onmousemove = (h) => {
      oEvent = h
      oEvent.preventDefault()
      let x = oEvent.clientX - disX
      let y = oEvent.clientY - disY
      // console.log(box.offsetLeft);
      

      // let x = boxRef.current?.offsetLeft
      // let y = boxRef.current?.offsetTop

      // 图形移动的边界判断
      x = x <= 0 ? 0 : x
      x = x >= fatherBox.offsetWidth - _offsetWidth ? fatherBox.offsetWidth - _offsetWidth : x
      y = y <= 0 ? 0 : y
      y = y >= fatherBox.offsetHeight - _offsetHeight ? fatherBox.offsetHeight - _offsetHeight : y

      hotItemMoveAndDrag('move', fatherIndex, sonIndex, x, y)
      // hotItemMoveAndDrag('move', 1, 1, offsetLeft1, offsetTop1)
    }

    // const xxx = useMemo(() => {
    //   return box.offsetLeft
    // }, [box.offsetLeft])

    // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
    fatherBox.onmouseleave = function () {
      fatherBox.onmousemove = null
      fatherBox.onmouseup = null
    }
    // 鼠标弹起后停止移动
    fatherBox.onmouseup = function () {
      fatherBox.onmousemove = null
      fatherBox.onmouseup = null
    }
  }

  // 热区拉伸
  const onHotSpotDrag = (fatherIndex, sonIndex, id, e) => {
    e.stopPropagation() // 阻止冒泡,避免缩放时触发移动事件
    e.preventDefault() // 阻止默认事件
    const fatherBox = document.querySelector(`#hotspot${fatherIndex}`)
    const box = document.querySelector(`#hotspot${fatherIndex} #hotitem${sonIndex}`)

    if (!fatherBox || !box) return

    const _offsetLeft = box.offsetLeft
    const _offsetTop = box.offsetTop
    const pos = {
      w: box.offsetWidth,
      h: box.offsetHeight,
      x: e.clientX,
      y: e.clientY
    }
    fatherBox.onmousemove = (ev) => {
      ev.preventDefault()
      // 设置图片的最小缩放为30*30
      let w = Math.max(30, ev.clientX - pos.x + pos.w)
      let h = Math.max(30, ev.clientY - pos.y + pos.h)

      // 设置热区的最大宽高
      w = w >= fatherBox.offsetWidth - _offsetLeft ? fatherBox.offsetWidth - _offsetLeft : w
      h = h >= fatherBox.offsetHeight - _offsetTop ? fatherBox.offsetHeight - _offsetTop : h
      hotItemMoveAndDrag('drag', fatherIndex, sonIndex, w, h)
    }
    fatherBox.onmouseleave = function () {
      fatherBox.onmousemove = null
      fatherBox.onmouseup = null
    }
    fatherBox.onmouseup = function () {
      fatherBox.onmousemove = null
      fatherBox.onmouseup = null
    }
  }

  const hotItemMoveAndDrag = (type, fatherIndex, sonIndex, arg1, arg2) => {
    //  type: 'move' 移动  'drag' 拉伸  'idChange' id输入框改变 'linkConfigChange' 链接配置改变
    const fatherObj = moduleAreaConfigList.find((_, index) => index === fatherIndex)
    if (fatherObj) {
      const { hotZoneConfigList = [] } = fatherObj || {}
      const targetHotItem = hotZoneConfigList.find((_, index) => index === sonIndex)
      if (!targetHotItem) return
      const item =
        type === 'move'
          ? { x: arg1, y: arg2 }
          : type === 'drag'
          ? { w: arg1, h: arg2 }
          : type === 'idChange'
          ? { id: arg1 }
          : type === 'linkConfigChange'
          ? { config: arg1 }
          : {}
      const newTargetHotItem = { ...targetHotItem, ...item }
      // console.log(item)

      hotZoneConfigList.splice(sonIndex, 1, newTargetHotItem)
      fatherObj.hotZoneConfigList = hotZoneConfigList
      const newDataList = [...moduleAreaConfigList].map((item, index) => {
        if (index === fatherIndex) {
          item = fatherObj
        }
        return item
      })
      setModuleAreaConfigList(newDataList)
    }
  }

  return (
    <PageContainer>
      <Card>
        <Form form={form} labelCol={{ span: 5 }}>
          {moduleAreaConfigList &&
            moduleAreaConfigList.map((item, index) => {
              const { backImg, hotZoneConfigList } = item
              return (
                <Card key={`hotspot_${index}`} style={{ marginTop: '20px', overflow: 'hidden' }}>
                  <Row>
                    <Col span={10}>
                      <div className='mb10'>
                        <span>模块背景图:</span>
                      </div>
                      <div id={`hotspot${index}`} className='wd375' style={{ position: 'relative' }}>
                        <img className='wd375' style={{ height: 'auto' }} src={backImg} />
                        <div className='mask' />
                        {renderHotItem(index, hotZoneConfigList)}
                      </div>
                    </Col>
                    <Col span={14}>
                      <div className='mb10'>
                        <span>热区链接：</span>
                      </div>
                      <HotEditTable
                        setTableData={(value) => {
                          console.log('value----', value)
                          const newDataList = moduleAreaConfigList.map((item, idx) => {
                            if (index === idx) {
                              item = { ...item, hotZoneConfigList: value.map((item, idx) => ({ ...item, positionId: `${index}-${idx}` })) }
                            }
                            return item
                          })
                          setModuleAreaConfigList(newDataList)
                        }}
                        tableValue={hotZoneConfigList.map((item) => ({ ...item, positionArea: { x: item.x, y: item.y, w: item.w, h: item.h } }))}
                      />
                      <Button
                        danger
                        className='mt20'
                        onClick={() => {
                          addHotItem(index)
                        }}
                      >
                        添加热区
                      </Button>
                    </Col>
                  </Row>
                </Card>
              )
            })}
        </Form>
      </Card>
    </PageContainer>
  )
}
