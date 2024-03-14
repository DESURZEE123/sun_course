import DiscussCard from '@/components/DiscussCard'
import './index.less'
export default () => {
  return (
    <>
      <div>
        <span className='back'>返回讨论列表</span>
        <div className='my-line'></div>
        <DiscussCard />
        <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
          <DiscussCard />
        </div>
        <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
          <DiscussCard />
        </div>
        <div style={{ paddingLeft: '30px', marginTop: '-5px' }}>
          <DiscussCard />
        </div>
      </div>
    </>
  )
}
