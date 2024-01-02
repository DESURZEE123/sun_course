import { PageContainer } from '@ant-design/pro-components'
import { Button, Card, Flex, Tabs } from 'antd'
import styled from 'styled-components'

const Title = styled.div`
  margin-bottom: 7px;
  color: #333;
  font-size: 17px;
  font-weight: bold;
`

const TimeText = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-size: 13px;
`

const Score = styled.div`
  width: 100%;
  background-color: #e4ecd6;
`

const HomeWork = () => {
  const onChange = (key: string) => {
    console.log(key)
  }

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1'
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2'
    }
  ]

  return (
    <PageContainer>
      <div>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        <Flex style={{ flexWrap: 'wrap' }}>
          <Card style={{ width: '300px', height: '200px', marginRight: '15px' }}>
            <Title>应用案例-xxxxxxx</Title>
            <TimeText>开始时间：2023-10-31 10:51</TimeText>
            <TimeText>截止时间：2023-12-31 10:51</TimeText>
            <div style={{ marginBottom: '8px' }}>
              <span>作业状态：</span>
              <span style={{ fontWeight: 'bold' }}>已完成</span>
            </div>
            <Score>
              <span>100分</span>
              <Button>查看</Button>
            </Score>
          </Card>
        </Flex>
      </div>
    </PageContainer>
  )
}

export default HomeWork
