import { Button, useMantineTheme } from '@mantine/core'

interface buttonProps {
  size: string
  dark: boolean
}

export default function DonateButton({ size, dark }: buttonProps) {
  const theme = useMantineTheme()

  return (
    <Button
      radius={34}
      size={size}
      styles={{
        root: {
          backgroundColor: dark
            ? theme.colors.darkBlue[0]
            : theme.colors.lightBlue[0],
          '&:hover': {
            backgroundColor: dark
              ? theme.colors.lightBlue[0]
              : theme.colors.darkBlue[0],
          },
        },
      }}
    >
      Donate
    </Button>
  )
}
