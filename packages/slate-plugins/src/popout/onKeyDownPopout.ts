import { Editor, Path, Transforms } from 'slate';
import { isBlockActive } from '../elements/queries';

export const onKeyDownPopout = (types: string[]) => (
  evt: any,
  editor: Editor
) => {
  const type = types.find(t => isBlockActive(editor, t));
  if (type) {
    if (evt.key === 'Enter' && evt.metaKey) {
      evt.preventDefault();

      const currentElem = Editor.above(editor, {
        match: n => n.type === type,
      });

      if (currentElem) {
        Transforms.insertNodes(
          editor,
          {
            type: 'paragraph',
            children: [{ text: '' }],
          },
          {
            at: Path.next(currentElem[1]),
            select: true,
          }
        );
      }
    }
  }
};
