import React from 'react';
import styled from 'styled-components';
import {
  MARK_STRIKETHROUGH,
  StrikethroughRenderLeafOptions,
  StrikethroughRenderLeafProps,
} from './types';

const StrikethroughText = styled.span`
  text-decoration: line-through;
`;

export const renderLeafStrikethrough = ({
  typeStrikethrough = MARK_STRIKETHROUGH,
}: StrikethroughRenderLeafOptions = {}) => ({
  children,
  leaf,
}: StrikethroughRenderLeafProps) => {
  if (leaf[typeStrikethrough]) {
    return (
      <StrikethroughText data-slate-type={typeStrikethrough}>
        {children}
      </StrikethroughText>
    );
  }

  return children;
};
