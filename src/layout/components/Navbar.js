import React from 'react'
import styles from '../sass/Navbar'
import {Menu} from 'antd'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Menu className={styles.menu}
        theme ="dark"
        mode="inline"
        defaultOpenKeys={['sub0']}
        defaultSelectedKeys={['0']}>
        <Menu.SubMenu className={styles.submenu}
          key="sub0"
          title={(
            <span className={styles.title}>Navigation One</span>
          )}>
          <Menu.Item className={styles.item}
            key="0">
            <a href="/test">Option 1</a>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="1">
            <a href="/test">Option 2</a>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="2">
            <a href="/test">Option 3</a>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu className={styles.submenu}
          key="sub2"
          title={(
            <span className={styles.title}>Navigation Two</span>
          )}>
          <Menu.Item className={styles.item}
            key="3">
            <a href="/test">Option 4</a>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="4">
            <a href="/test">Option 5</a>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="5">
            <a href="/test">Option 6</a>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu className={styles.submenu}
          key="sub3"
          title={(
            <span className={styles.title}>Navigation Three</span>
          )}>
          <Menu.Item className={styles.item}
            key="6">
            <a href="/test">Option 7</a>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="7">
            <a href="/test">Option 8</a>
          0</Menu.Item>
          <Menu.Item className={styles.item}
            key="8">
            <a href="/test">Option 9</a>
          1</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </nav>
  )
}

export default Navbar
