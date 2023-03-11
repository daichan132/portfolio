import { Box, Burger, Center, Container, Portal, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FullscreenMenu = () => {
  return (
    <Portal>
      <Box
        component={motion.div}
        initial={{ opacity: 0.5, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeInOut' }}
        sx={() => ({
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 99,
          height: '100vh',
          position: 'fixed',
          backgroundColor: 'white',
          padding: '0px 20px',
        })}
      >
        <Container py={70}>
          <Stack align="center" spacing={20}>
            aa
          </Stack>
        </Container>
      </Box>
    </Portal>
  );
};

export const HambergerMenu = ({ size }: { size: number }) => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setOpened(false);
  }, [router.pathname]);

  return (
    <>
      <Center
        onClick={() => {
          setOpened((o) => !o);
        }}
      >
        <Burger
          opened={opened}
          title={opened ? 'Close navigation' : 'Open navigation'}
          size={size}
          style={{ cursor: 'none' }}
        />
      </Center>
      {/* FullscreenMenu */}
      {opened ? <FullscreenMenu /> : null}
    </>
  );
};
