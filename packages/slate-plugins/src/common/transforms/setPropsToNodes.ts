import { isAncestor, isNodeType } from 'common/queries';
import { QueryOptions } from 'common/types';
import { merge } from 'lodash';
import { Descendant, Node } from 'slate';

/**
 * Recursively set properties to children nodes
 */
export const setPropsToNodes = (
  node: Node,
  // Value or factory
  props: Record<string, any> | (() => Record<string, any>),
  query?: QueryOptions
) => {
  if (isNodeType(node, query)) {
    if (props instanceof Function) {
      merge(node, props());
    } else {
      merge(node, props);
    }
  }

  if (!isAncestor(node)) return;

  node.children.forEach((child: Descendant) => {
    setPropsToNodes(child, props, query);
  });
};
