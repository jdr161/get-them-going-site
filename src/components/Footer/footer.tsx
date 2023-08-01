import { Container, useMantineTheme, Text } from '@mantine/core'

export default function Footer() {
  const footerHeight = 98
  const theme = useMantineTheme()

  return (
    <Container
      fluid
      mih={footerHeight}
      p={0}
      bg={theme.colors.backgroundLight[0]}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Text color={theme.colors.darkBlue[0]} size={12} align="center" weight='lighter'>
        COPYRIGHT © 2023 LET THEM GROW - ALL RIGHTS RESERVED.
      </Text>
    </Container>
  )
}
