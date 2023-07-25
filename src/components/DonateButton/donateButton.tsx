import { Button, useMantineTheme } from '@mantine/core'

export default function DonateButton() {
  const theme = useMantineTheme()

  return (
    <Button
      radius={34}
      size="md"
      styles={{
        root: {
          backgroundColor: theme.colors.darkBlue[0],
          '&:hover': { backgroundColor: theme.colors.lightBlue[0] },
        },
      }}
    >
      Donate
    </Button>
  )
}
