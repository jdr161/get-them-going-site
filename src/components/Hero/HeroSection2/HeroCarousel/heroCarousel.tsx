import { Carousel } from '@mantine/carousel'
import {
  createStyles,
  Paper,
  Text,
  Title,
  useMantineTheme,
  Container,
} from '@mantine/core'
import CoachIcon from '@components/icons/collegeCoachIcon'
import LaptopIcon from '@components/icons/laptopIcon'
import BooksIcon from '@components/icons/booksIcon'
import { ReactNode } from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colors.darkBlue[0],
  },

  title: {
    fontWeight: 700,
    color: theme.white,
    fontSize: 32,
  },

  text: {
    fontWeight: 400,
    color: theme.white,
    fontSize: 24,
  },

  textBox: {
    maxWidth: '60%',
  },
}))

interface CardProps {
  icon: ReactNode
  title: string
  text: string
}

function Card({ icon, title, text }: CardProps) {
  const { classes } = useStyles()

  return (
    <Paper className={classes.card}>
      {icon}
      <div className={classes.textBox}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.text} size="xs">
          {text}
        </Text>
      </div>
    </Paper>
  )
}

const data = [
  {
    icon: <CoachIcon width="146px" height="146px" />,
    title: 'College Coach',
    text: 'A college coach who guides them through the everyday stumbling blocks of living and learning independently for the first time.',
  },
  {
    icon: <LaptopIcon width="146px" height="146px" />,
    title: 'Technology',
    text: 'Purchasing expensive technology items',
  },
  {
    icon: <BooksIcon width="146px" height="146px" />,
    title: 'Books',
    text: 'Reimbursing students for books and other approved living expenses for their first year.',
  },
]

export default function HeroCarousel() {
  const theme = useMantineTheme()

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Container
      fluid={true}
      h={378}
      w="85%"
      maw={850}
      bg={theme.colors.lightGray[0]}
      py={14}
    >
      <Carousel
        loop
        slideSize="80%"
        slideGap="xl"
        align="center"
        containScroll="trimSnaps"
      >
        {slides}
      </Carousel>
    </Container>
  )
}
