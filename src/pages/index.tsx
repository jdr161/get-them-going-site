import { Container } from '@mantine/core'
import LibraryImage from '@images/library-hero-image.jpg'

export default function Home() {
  return (
    <Container
      fluid={true}
      h={716}
      sx={{
        background: `url(${LibraryImage.src})`,
        backgroundSize: 'cover',
      }}
    >

    </Container>
  )
}
