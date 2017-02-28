import React, {PureComponent} from 'react'
import styles from '../sass/MainSection'
import {Button, Form, Input, Icon} from 'antd'
import ajax from 'shared/ajax'
import {getURLParams} from 'invincible'

class MainSection extends PureComponent {
  state = {
    loading: false
  }

  handleSubmit(e) {
    e.preventDefault()

    const {form} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        })
        ajax({
          url: '/api/login',
          data: values
        }).then(() => {
          const {redirect} = getURLParams()

          if (redirect) {
            location.replace(decodeURIComponent(redirect))
          } else {
            location.replace('/')
          }
        }).catch(() => {
          this.setState({
            loading: false
          })
        })
      }
    })
  }

  render() {
    const {form} = this.props,
      {loading} = this.state

    return (
      <div className={styles.mainSection}>
        <h1 className={styles.title}>采购商城</h1>
        <Form onSubmit={this.handleSubmit}
          className={styles.form}>
          <Form.Item className={styles.field}>
            {form.getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: '用户名不能为空'
              }]
            })(<Input addonBefore={<Icon type="user"/>} placeholder="手机号"/>)}
          </Form.Item>
          <Form.Item className={styles.field}>
            {form.getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '密码不能为空'
              }]
            })(<Input addonBefore={<Icon type="lock"/>} placeholder="密码"/>)}
          </Form.Item>
          <Form.Item className={styles.field}>
            <Button className={styles.button} htmlType="submit" loading={loading}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(MainSection)
