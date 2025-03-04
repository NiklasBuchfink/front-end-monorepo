import { Box } from 'grommet'

import SubjectPreview from './'

const GIRAFFE = {
  favorite: false,
  id: '123',
  locations: [
    {
      'image/jpeg':
        'https://panoptes-uploads.zooniverse.org/production/subject_location/48972f7b-8a4d-4f98-a85b-ed3578db75f0.jpeg'
    }
  ]
}

const PORTRAIT_PAGE = {
  favorite: false,
  id: '123',
  locations: [
    {
      'image/jpeg':
        'https://panoptes-uploads.zooniverse.org/production/subject_location/fb2c57e2-96f7-49b1-9bd4-9bdc73d847f8.jpeg'
    }
  ]
}

const VIDEO = {
  favorite: false,
  id: '123',
  locations: [
    {
      'video/mp4':
        'https://panoptes-uploads.zooniverse.org/production/subject_location/279b23de-b1e8-4a1c-90c4-2d25bbee787d.mp4'
    }
  ]
}

function toggle() {
  this.favorite = !this.favorite
}

;[GIRAFFE, PORTRAIT_PAGE, VIDEO].forEach(subject => {
  subject.toggleFavourite = toggle.bind(subject)
})

export default {
  title: 'Project App / Shared / Subject Preview',
  component: SubjectPreview
}

export function Plain({ isLoggedIn, subject, slug }) {
  return (
    <Box height='medium' pad='medium' width='medium'>
      <SubjectPreview
        height='200px'
        isLoggedIn={isLoggedIn}
        subject={subject}
        slug={slug}
        width='270px'
      />
    </Box>
  )
}

Plain.args = {
  isLoggedIn: true,
  subject: GIRAFFE,
  slug: 'zooniverse/snapshot-serengeti'
}

export function Transcription({ isLoggedIn, subject, slug }) {
  return (
    <Box height='medium' pad='medium' width='medium'>
      <SubjectPreview
        height='200px'
        isLoggedIn={isLoggedIn}
        subject={subject}
        slug={slug}
        width='270px'
      />
    </Box>
  )
}

Transcription.args = {
  isLoggedIn: true,
  subject: PORTRAIT_PAGE,
  slug: 'zooniverse/snapshot-serengeti'
}

export function Video({ isLoggedIn, subject, slug }) {
  return (
    <Box height='medium' pad='medium' width='medium'>
      <SubjectPreview
        height='200px'
        isLoggedIn={isLoggedIn}
        subject={subject}
        slug={slug}
        width='270px'
      />
    </Box>
  )
}

Video.args = {
  isLoggedIn: true,
  subject: VIDEO,
  slug: 'zooniverse/snapshot-serengeti'
}
