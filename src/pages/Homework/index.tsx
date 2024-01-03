import HomeCard from '@/components/HomeCard'
import { PageContainer } from '@ant-design/pro-components'
import { Flex, Tabs } from 'antd'
import { history } from 'umi'

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

  const goDetail = () => {
    // history.push('/pages/commonLink/list/edit?id=' + id)
    history.push('/homework/details')
    console.log(111)
  }

  return (
    <PageContainer>
      <div>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        <Flex style={{ flexWrap: 'wrap' }}>
          <HomeCard goDetail={goDetail} />
          <HomeCard goDetail={goDetail} />
          <HomeCard goDetail={goDetail} />
          <HomeCard goDetail={goDetail} />
        </Flex>
      </div>
    </PageContainer>
  )
}

export default HomeWork
