import { UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Space } from 'antd'

export default () => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <Space>
        <Avatar style={{ backgroundColor: '#c5ccdd' }} icon={<UserOutlined />} />
        <div>
          <span className='text-detail'>王怡阳</span>
          <div className='text-detail'>09-15 11:23</div>
        </div>
      </Space>
      <div>
        <div className='text'>讨论1xxxxxxxxxx</div>
        <div>讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容讨论的内容</div>
        <span className='text-detail'>回复 64</span>
        <span className='text-detail'>赞 32</span>
      </div>
    </Card>
  )
}
