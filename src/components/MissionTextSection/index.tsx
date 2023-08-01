import { StaticImageData } from 'next/image'
import { Box, Container, useMantineTheme } from '@mantine/core'

interface MissionTextSectionProps {
  backgroundImage: StaticImageData
  text: string
  textRight?: boolean
  dark?: boolean
}

export default function MissionTextSection({
  backgroundImage,
  text,
  textRight,
  dark,
}: MissionTextSectionProps) {
  const theme = useMantineTheme()
  const textSectionHeight = 385

  return (
    <Container
      fluid
      h={textSectionHeight}
      p={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        background: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        justifyContent: textRight ? 'end' : 'start'
      }}
    >
      <Box
        w="55%"
        h={textSectionHeight}
        sx={{
          clipPath: textRight
            ? 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
            : 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
          background: dark
            ? theme.colors.darkBlue[0]
            : theme.colors.lightBlue[0],
          opacity: 0.9,
        }}
      ></Box>
    </Container>
  )
}
