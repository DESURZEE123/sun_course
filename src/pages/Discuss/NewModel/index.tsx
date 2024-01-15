import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal, Upload } from 'antd'
import { useState } from 'react'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

export default () => {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setOpen(true)
  }

  const onFinish = (values: any) => {
    console.log(values)
    setOpen(false)
  }

  const onReset = () => {
    form.resetFields()
    setOpen(false)
  }
  return (
    <>
      <Button type='link' style={{ marginRight: '30px' }} onClick={showModal}>
        新建话题
      </Button>
      <Modal title='新建话题' open={open} footer={null}>
        <Form form={form} {...layout} onFinish={onFinish}>

          <Form.Item name={['newTalk', 'title']} label='话题名称' rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name={['newTalk', 'introduction']} label='描述'>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={['newTalk', 'material']} label='添加附件'>
            <Upload>
              <Button icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button htmlType='button' onClick={onReset} style={{ marginRight: '10px' }}>
              取消
            </Button>
            <Button type='primary' htmlType='submit'>
              确定
            </Button>
          </Form.Item>
          
        </Form>
      </Modal>
    </>
  )
}
