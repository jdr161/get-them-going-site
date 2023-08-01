import { StaticImageData } from 'next/image'
import { Box, Container, useMantineTheme, Text } from '@mantine/core'

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
      mih={textSectionHeight}
      p={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        background: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        justifyContent: textRight ? 'end' : 'start',
      }}
    >
      <Box
        w="55%"
        mih={textSectionHeight}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          clipPath: textRight
            ? 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
            : 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
          background: dark
            ? theme.colors.darkBlue[0]
            : theme.colors.lightBlue[0],
          opacity: 0.8,
        }}
      >
        <Text
          align='center'
          color='white'
          size={24}
          weight='bold'
          py={30}
          pl={textRight ? '25%' : 30}
          pr={textRight ? 30 : '25%'}
        >
          {text}
        </Text>
      </Box>
    </Container>
  )
}
