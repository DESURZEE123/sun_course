import { LikeOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Space } from 'antd'
import styled from 'styled-components'

const ReplayLike = styled.div`
  display: flex;
  margin-top: 5px;
`

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
        <ReplayLike>
          {/* <MessageOutlined /> */}
          <div style={{ marginRight: '15px' }}>
            <Button
              shape='circle'
              size='small'
              icon={<MessageOutlined />}
              onClick={() => {
                // reviewLog(item)
              }}
            />
            <span className='text-detail'> 回复 64</span>
          </div>
          <div>
            <Button
              shape='circle'
              size='small'
              icon={<LikeOutlined />}
              onClick={() => {
                // reviewLog(item)
              }}
            />
            <span className='text-detail'> 赞 32</span>
          </div>
        </ReplayLike>
      </div>
    </Card>
  )
}
