import { Menu, Button, createStyles, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import DownArrowIcon from '@components/icons/downArrowIcon'

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },

  aboutUsButton: {
    color: theme.colors.lightBlue[0],
  },
}))

export default function AboutUsMenu() {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="subtle"
          rightIcon={
            <DownArrowIcon
              width="15px"
              height="15px"
              color={theme.colors.lightBlue[0]}
            />
          }
          className={classes.aboutUsButton}
          mr={20}
        >
          About Us
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href="/about-us/mission" className={classes.link}>
          <Menu.Item>Mission</Menu.Item>
        </Link>
        <Link href="/about-us/leadership" className={classes.link}>
          <Menu.Item>Leadership</Menu.Item>
        </Link>
        <Link href="/about-us/stories" className={classes.link}>
          <Menu.Item>Stories</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}
