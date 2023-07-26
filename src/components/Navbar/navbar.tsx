import { Container, Grid, Title, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@images/GTG-logo-plain.png'
import DonateButton from '@/components/DonateButton/donateButton'

export default function Navbar() {
  const theme = useMantineTheme()
  const navbarHeight = 75

  return (
    <Container
      fluid={true}
      sx={(theme) => ({
        height: navbarHeight,
        backgroundColor: theme.colors.backgroundLight[0],
      })}
    >
      <Grid justify="center" align="center">
        <Grid.Col span="content" py={7.5}>
          <Link href='/'>
            <Image
              height={navbarHeight - 15}
              src={Logo}
              alt="Get them Going logo"
            />
          </Link>
        </Grid.Col>
        <Grid.Col span="auto">
            <Title
              size={32}
              weight={700}
              color={theme.colors.lightBlue[0]}
              align="center"
            >
              Get Them{' '}
              <strong
                style={{ fontWeight: 700, color: theme.colors.darkBlue[0] }}
              >
                Going
              </strong>
            </Title>
        </Grid.Col>
        <Grid.Col span="content">
          <DonateButton size="md" dark={true} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
