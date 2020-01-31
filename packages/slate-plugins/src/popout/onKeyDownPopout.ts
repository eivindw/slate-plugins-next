import { Editor, Path, Transforms } from 'slate';
import { isBlockActive } from 'slate-plugins-next';

export const onKeyDownPopout = (type: string) => (
  evt: any,
  editor: Editor
) => {
  if (isBlockActive(editor, type)) {
    if (evt.key === 'Enter' && evt.metaKey) {
      evt.preventDefault();

      const [, tablePath] = Editor.above(editor, {
        match: n => n.type === type,
      });

      Transforms.insertNodes(
        editor,
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
        {
          at: Path.next(tablePath),
          select: true,
        },
      );
    }
  }
};
