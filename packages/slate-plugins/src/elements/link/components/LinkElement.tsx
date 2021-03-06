import React from 'react';
import { LinkRenderElementProps } from 'elements/link/types';

export const LinkElement = ({
  attributes,
  children,
  element,
}: LinkRenderElementProps) => (
  <a {...attributes} href={element.url}>
    {children}
  </a>
);
