import DiscussCard from '@/components/DiscussCard'
import { Col, Row, Tree } from 'antd'
import './index.less'

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0'
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          },
          {
            title: 'leaf',
            key: '0-0-0-2'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0'
          }
        ]
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0'
          },
          {
            title: 'leaf',
            key: '0-0-2-1'
          }
        ]
      }
    ]
  }
]

const HomePage = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <div className='container'>
            <div>目录</div>
            <Tree defaultExpandedKeys={['0-0-0']} onSelect={onSelect} treeData={treeData} />
          </div>
        </Col>
        <Col span={12}>
          <DiscussCard />
        </Col>
      </Row>
    </>
  )
}

export default HomePage
