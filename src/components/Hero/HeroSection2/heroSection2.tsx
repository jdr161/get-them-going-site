import { Container, useMantineTheme, Title } from '@mantine/core'
import HeroCarousel from '@/components/Hero/HeroSection2/HeroCarousel/heroCarousel'

export default function HeroSection2() {
  const heroSection2Height = 541
  const theme = useMantineTheme()

  return (
    <Container
      fluid
      h={heroSection2Height}
      bg={theme.colors.darkBlue[0]}
    >
      <Title
        color="white"
        ta="center"
        pt={29}
        pb={44}
        sx={{ fontSize: 40, fontStyle: 'normal', fontWeight: 700 }}
      >
        How We Support Students
      </Title>
      <HeroCarousel />
    </Container>
  )
}
