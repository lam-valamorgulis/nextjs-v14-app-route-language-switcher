"use client";

import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function AuthStatus() {
  return (
    <Box className="pt-1 sm:py-0 self-center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src="https://lh3.googleusercontent.com/a/ACg8ocKkD48zTymUuBJ2UVO0RnCfyfxKNZa7dsFk2L3TlxJ2w5I=s576-c-no"
            fallback="LĐ"
            size="2"
            radius="full"
            className="cursor-pointer "
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">lamdang@smartdev.com</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
}
