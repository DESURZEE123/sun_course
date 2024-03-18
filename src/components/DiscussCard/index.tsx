import { BarsOutlined, LikeOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Input, Space } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { history, useModel } from 'umi'

const ReplayLike = styled.div`
  display: flex;
  margin-top: 5px;
`

export default ({ TitleList }: { TitleList: string[] }) => {
  const [isReplay, setIsReplay] = useState(false)
  const { discussList } = useModel('system')
  console.log(TitleList)
  const { DisName, title, data, content, asList } = TitleList

  return (
    <Card style={{ marginBottom: '10px' }}>
      <Space>
        <Avatar style={{ backgroundColor: '#c5ccdd' }} icon={<UserOutlined />} />
        <div>
          <span className='text-detail'>{DisName}</span>
          <div className='text-detail'>{data}</div>
        </div>
      </Space>
      <div>
        <div className='text'>{title}</div>
        <div>{content}</div>
        <ReplayLike>
          <div style={{ marginRight: '15px' }}>
            <Button
              shape='circle'
              size='small'
              icon={<MessageOutlined style={{ fontSize: isReplay ? '16px' : 'inherit', color: isReplay ? '#08c' : 'inherit' }} />}
              onClick={() => {
                setIsReplay((prevState) => !prevState)
              }}
            />
            <span className='text-detail'> 回复 {asList.length}</span>
          </div>
          <div style={{ marginRight: '15px' }}>
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
          <div>
            <Button
              shape='circle'
              size='small'
              icon={<BarsOutlined />}
              onClick={() => {
                history.push('/discuss/detail')
                // reviewLog(item)
              }}
            />
            <span className='text-detail'> 详情</span>
          </div>
        </ReplayLike>
      </div>
      {isReplay && (
        <div>
          <Input.TextArea style={{ marginTop: '10px' }} value={'回复xxx：'} />
          <div style={{ marginTop: '10px', textAlign: 'right' }}>
            <Button type='primary'>回复</Button>
          </div>
        </div>
      )}
    </Card>
  )
}
