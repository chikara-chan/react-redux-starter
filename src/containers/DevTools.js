import React from 'react'
import {createDevTools} from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor'

export default createDevTools(
  <DockMonitor defaultPosition="bottom"
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w">
    <ChartMonitor style={{
      padding: '0 20px',
      background: '#fff',
      text: {
        colors: {
          hover: '#378cbe'
        }
      }
    }}
      tooltipOptions={{
        style: {
          background: '#fff',
          opacity: '0.9',
          borderRadius: '5px',
          border: '1px solid #dbdbdb',
          padding: '5px'
        }
      }}/>
  </DockMonitor>
)
