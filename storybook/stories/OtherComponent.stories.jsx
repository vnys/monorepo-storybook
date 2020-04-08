import React from 'react'
import { OtherComponent } from '../components/OtherComponent'

export default {
  title: 'Design System|OtherComponent',

  parameters: {
    component: OtherComponent,
    componentSubtitle: 'Display text in some other component',
  },
}

export const OtherStory = () => (
  <OtherComponent color="maroon">I am some other component</OtherComponent>
)

OtherStory.story = {
  parameters: {
    docs: {
      storyDescription: 'Add some text and specify a colour',
    },
  },
}
