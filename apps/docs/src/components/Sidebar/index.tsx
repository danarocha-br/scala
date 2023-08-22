"use client";

import React from "react";
import { Stack, Text, Tooltip } from "@compasso/scala";
import { SwitchTheme } from "../SwitchTheme";

import * as S from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <aside className={S.sidebar()}>
      <Stack align="center" justify="between" fullWidth>
        <Text size="lg">Compasso</Text>
        <Tooltip content="Toogle theme" direction="left">
          <SwitchTheme />
        </Tooltip>
      </Stack>
    </aside>
  );
};
