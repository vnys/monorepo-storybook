import React from 'react'
import { SomeComponent } from '../../components/SomeComponent'

export default {
  title: 'SomeComponent',

  parameters: {
    component: SomeComponent,
    componentSubTitle: 'Display text in some component',
  },
}

export const SomeStory = () => (
  <SomeComponent color="teal">I am some component</SomeComponent>
)
