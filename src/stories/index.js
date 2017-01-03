import React from 'react'

import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import Welcome from './Welcome'
import UploadProgress from 'components/UploadProgress'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Upload Progress', module)
  .add('basic', () => <UploadProgress />)
