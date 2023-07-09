import React from "react"
import { Modal, Form, Input } from "antd"

const UserModal = ({ visible, user, form, onCancel, onSave }) => {
  const handleSave = () => {
    form.validateFields().then(values => {
      onSave(values)
    })
  }

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={handleSave}
      onCancel={onCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserModal
