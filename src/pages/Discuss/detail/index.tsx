import DiscussCard from '@/components/DiscussCard'
import { Button, Card } from 'antd'
import styled from 'styled-components'

const Line = styled.div`
  margin: 10px 0 20px;
  border: none;
  height: 2px;
  background-color: #bbbbbb;
`

export default () => {
  return (
    <>
      <div>
        <div
          style={{ textAlign: 'right' }}
          onClick={() => {
            history.back()
          }}
        >
          <Button type='text'>返回讨论列表</Button>
        </div>
        <Line />
        <Card>
          <DiscussCard />
          <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
            <DiscussCard />
            {/* 二级回复 */}
            <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
              <DiscussCard />
            </div>
          </div>
          <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
            <DiscussCard />
          </div>
          <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
            <DiscussCard />
          </div>
        </Card>
      </div>
    </>
  )
}
