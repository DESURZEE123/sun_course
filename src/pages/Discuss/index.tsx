import DiscussCard from '@/components/DiscussCard'
import { Button, Card, Input, Space } from 'antd'
// <LikeOutlined />
const Discuss = () => {
  const { Search } = Input
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <Card>
      <Space style={{ marginBottom: '20px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>全部话题</span>
        <Search style={{ width: 200, marginLeft: '40px' }} placeholder='搜索话题' onSearch={onSearch} />
        <Button type='link'>新建话题</Button>
        <Button type='link' style={{ marginRight: '30px' }}>
          我的话题
        </Button>
      </Space>
      <DiscussCard />
      <DiscussCard />
      <DiscussCard />
      <DiscussCard />
    </Card>
  )
}

export default Discuss
