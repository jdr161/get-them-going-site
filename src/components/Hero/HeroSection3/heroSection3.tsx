import { Container } from '@mantine/core'
import { useMantineTheme, Title } from '@mantine/core'

export default function HeroSection3() {
  const heroSection3Height = 500
  const theme = useMantineTheme()

  return (
    <Container fluid h={heroSection3Height} bg={theme.colors.lightBlue[0]}>
      <Title
        color="white"
        ta="center"
        pt={29}
        sx={{ fontSize: 40, fontStyle: 'normal', fontWeight: 700 }}
      >
        Selection Process
      </Title>
    </Container>
  )
}
