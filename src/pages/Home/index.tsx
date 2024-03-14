import DiscussCard from '@/components/DiscussCard'
import { Col, Row } from 'antd'
import TreeDirectory from './TreeDirectory'

const HomePage = () => {
  // ;(function countClicks() {
  //   let numClicks = 0
  //   document.addEventListener('click', () => {
  //     alert(++numClicks)
  //   })
  // })()


  

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <TreeDirectory />
        </Col>
        <Col span={12}>
          <DiscussCard />
          <DiscussCard />
          <DiscussCard />
          <DiscussCard />
          <DiscussCard />
        </Col>
      </Row>
    </>
  )
}

export default HomePage
