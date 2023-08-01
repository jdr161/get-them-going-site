import AboutUsHeader from '@/components/AboutUsHeader/aboutUsHeader'
import MissionTextSection from '@/components/MissionTextSection'
import { Container, Text, useMantineTheme } from '@mantine/core'
import LectureHall from '@images/lecture-hall.png'
import Classroom from '@images/classroom.png'

export default function Page() {
  const section1text =
    'Get Them Going seeks to serve first-generation or disadvantaged high school seniors who are college bound. We believe that with extra support, highly motivated students can alter the course of their future.'
  const section2text =
    'Last year the cost for dorm room essentials, tech, and books for an incoming freshman was $2,500'
  const section3text =
    'Get Them Going hopes to alleviate some of the burdens on families by supplying an initial technology investment, learning tools, books, and emotional support not addressed by aid and scholarships.'
  const theme = useMantineTheme()
  return (
    <>
      <AboutUsHeader isMissionPage />
      <MissionTextSection
        backgroundImage={LectureHall}
        text={section1text}
        dark
        textRight
      />
      <Container
        fluid
        p={32}
        bg={theme.colors.lightBlue[0]}
      >
        <Text
          align='center'
          color='white'
          size={32}
          weight='bold'
        >
          {section2text}
        </Text>
      </Container>
      <MissionTextSection
      backgroundImage={Classroom}
      text={section3text}
      dark
      textRight={false} />
    </>
  )
}
