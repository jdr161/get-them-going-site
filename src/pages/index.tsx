import {
  Container,
  Grid,
  Center,
  Button,
  Text,
  useMantineTheme,
  Box,
  Title,
} from '@mantine/core'
import HeroCarousel from '@/components/HeroCarousel/heroCarousel'
import LibraryImage from '@images/library-hero-image.jpg'

export default function Home() {
  const heroImageHeight = 716
  const heroSection2Height = 541
  const theme = useMantineTheme()

  const heroButtonStyles = {
    width: 243,
    height: 84,
    borderRadius: 34,
    backgroundColor: theme.colors.lightBlue[0],
    '&:hover': { backgroundColor: theme.colors.darkBlue[0] },
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 700,
  }

  return (
    <>
      <Container
        fluid={true}
        h={heroImageHeight}
        p={0}
        sx={{
          background: `url(${LibraryImage.src})`,
          backgroundSize: 'cover',
        }}
      >
        <Grid align="center">
          <Grid.Col span={6}>
            <Box
              w="100%"
              h={350}
              sx={{
                clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
                background: theme.colors.darkBlue[0],
                opacity: 0.9,
              }}
            >
              <Center mih="100%" sx={{ justifyContent: 'start' }}>
                <Text
                  p={40}
                  sx={{
                    width: '75%',
                    color: 'white',
                    fontSize: 30,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}
                >
                  Serving college bound first-generation or disadvantaged
                  high-school seniors
                </Text>
              </Center>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Center mih={heroImageHeight - 16}>
              <Button sx={{ ...heroButtonStyles }}>Donate</Button>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
      <Container
        fluid={true}
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
    </>
  )
}
