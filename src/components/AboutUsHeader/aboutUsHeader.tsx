import { Container, createStyles } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.lightBlue[0],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  smallText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  largeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  link: {
    textDecoration: 'none',
  },
}))

interface headerProps {
  isMissionPage?: Boolean
  isLeadershipPage?: Boolean
  isStoriesPage?: Boolean
}
export default function AboutUsHeader({
  isMissionPage,
  isLeadershipPage,
  isStoriesPage,
}: headerProps) {
  const navbarHeight = 75
  const { classes } = useStyles()

  return (
    <Container
      fluid={true}
      className={classes.container}
      sx={(theme) => ({
        height: navbarHeight,
      })}
    >
      <Link href="/about-us/mission" className={classes.link}>
        <div className={isMissionPage ? classes.largeText : classes.smallText}>
          Our Mission
        </div>
      </Link>
      <Link href="/about-us/leadership" className={classes.link}>
        <div
          className={isLeadershipPage ? classes.largeText : classes.smallText}
        >
          Leadership
        </div>
      </Link>
      <Link href="/about-us/stories" className={classes.link}>
        <div className={isStoriesPage ? classes.largeText : classes.smallText}>
          Stories
        </div>
      </Link>
    </Container>
  )
}
