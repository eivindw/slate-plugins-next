import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.9em;
  background-color: lightgray;
  border-radius: 8px;
  padding: 0 5px;
`;

const isMac =
  typeof window !== 'undefined' &&
  /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

export const PopoutOverlayElement = () => (
  <Overlay>exit: {isMac ? '⌘' : 'CTRL'} ↩</Overlay>
);
