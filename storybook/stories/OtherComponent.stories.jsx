import React from 'react'
import { OtherComponent } from '../components/OtherComponent'

export default {
  title: 'OtherComponent',

  parameters: {
    component: OtherComponent,
    componentSubTitle: 'Display text in some component',
  },
}

export const OtherStory = () => (
  <OtherComponent color="maroon">I am some other component</OtherComponent>
)
