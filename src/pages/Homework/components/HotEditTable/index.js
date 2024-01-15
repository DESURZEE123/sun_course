import { EditableProTable } from '@ant-design/pro-components'
import { Button, Input } from 'antd'
import { useEffect, useState } from 'react'

const position_style = {
  width: '100%',
  display: 'flex',
  padding: '0 5px'
}

const position_item_style = {
  flex: 1
}

const HotEditTable = ({ tableValue = [], setTableData = () => {}, linkList = [] }) => {
  const [editableKeys, setEditableRowKeys] = useState([])
  const [show, setShow] = useState(false)
  const [pageTitle, setPageTitle] = useState()
  const [linkConfig, setLinkConfig] = useState()
  useEffect(() => {
    setEditableRowKeys(tableValue.map((item) => item.positionId))
  }, [tableValue])
  const columns = [
    { title: '热区ID', dataIndex: 'positionId', editable: false, width: '60px' },
    {
      title: '热区名称',
      width: 120,
      dataIndex: 'zoneName',
      renderFormItem: () => <Input placeholder='请输入热区名称' />
    },
    {
      title: '热区坐标',
      width: 220,
      editable: false,
      dataIndex: 'positionArea',
      render: (value) => {
        const { x, y, w, h } = value
        return (
          <div style={position_style}>
            <span style={position_item_style}>X: {x} </span>
            <span style={position_item_style}>Y: {y} </span>
            <span style={position_item_style}>W: {w} </span>
            <span style={position_item_style}>H: {h} </span>
          </div>
        )
      }
    },
    {
      title: '跳转链接',
      width: 70,
      editable: false,
      render: (value) => {
        const { positionId, linkConfigList, linkType } = value
        return (
          <Button
            danger
            type='link'
            style={{ padding: 0 }}
            onClick={() => {
              setPageTitle(positionId)
              setShow(true)
              setLinkConfig({ positionId, linkConfigList, linkType })
            }}
          >
            添加链接
          </Button>
        )
      }
    },
    {
      title: '操作',
      valueType: 'option',
      width: 60
    }
  ]

  const saveFun = (data) => {
    const { positionId, linkConfigList, linkType } = data
    const newTableList = tableValue.map((item) => {
      if (item.positionId === positionId) {
        item = { ...item, linkType, linkConfigList }
      }
      return item
    })
    setTableData(newTableList)
    setShow(false)
  }

  return (
    <>
      <EditableProTable
        style={{ marginLeft: '-25px' }} // 对齐
        rowKey='positionId'
        recordCreatorProps={false} // 关闭默认的新建按钮
        columns={columns}
        value={tableValue}
        editable={{
          type: 'multiple',
          rowKey: 'positionId',
          editableKeys,
          deleteText: (
            <Button type='link' danger>
              删除
            </Button>
          ),
          deletePopconfirmMessage: '确定要删除此项配置吗?',
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete]
          },
          onChange: setEditableRowKeys,
          onValuesChange: (record, recordList) => {
            setTableData(recordList)
          }
        }}
      />
    </>
  )
}

export default HotEditTable
