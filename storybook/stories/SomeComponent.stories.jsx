import React from 'react'
import { SomeComponent } from '../../components/SomeComponent'

export default {
  title: 'Design System|SomeComponent',

  parameters: {
    component: SomeComponent,
    componentSubtitle: 'Display text in some component',
  },
}

export const SomeStory = () => (
  <SomeComponent color="teal">I am some component</SomeComponent>
)

SomeStory.story = {
  parameters: {
    docs: {
      storyDescription: 'Add some text and specify a colour',
    },
  },
}
