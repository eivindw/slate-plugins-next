# slate-plugins-next

[![codecov](https://codecov.io/gh/zbeyens/slate-plugins-next/branch/master/graph/badge.svg)](https://codecov.io/gh/zbeyens/slate-plugins-next)
[<img src="https://img.shields.io/npm/v/slate-plugins-next.svg" />](https://npm.im/slate-plugins-next)&nbsp;
[<img src="https://badgen.net/npm/dw/slate-plugins-next" />](https://npm.im/slate-plugins-next)&nbsp;
[<img src="https://badgen.net/bundlephobia/minzip/slate-plugins-next" />](https://bundlephobia.com/result?p=slate-plugins-next)&nbsp;
[<img src="https://badgen.now.sh/badge/license/MIT" />](../../LICENSE)&nbsp;
[<img src="https://slate-slack.herokuapp.com/badge.svg?logo=slack" />](https://app.slack.com/client/T1RFVK5FV/C013QHXSCG1)&nbsp;

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](../../README.md#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[Slate](https://github.com/ianstormtaylor/slate/) is a completely
customizable framework for building rich text editors. However, your
codebase can quickly get complex when implementing tens of features.
Built on top of Slate, `slate-plugins-next` enables you to use a list of
configurable and extendable plugins to keep your codebase clean and easy
to debug.


This library comes with a lot of plugins for the elements, marks,
deserialization, normalization, and so on. We also provide a bunch of
helpers on top of Slate's API.

[Try out the existing ones](https://slate-plugins-next.netlify.app/?path=/story/plugins-playground--plugins)
and
[create your own plugins](https://slate-plugins-next.netlify.app/?path=/docs/docs-guide--page)!


## 📦 Included

- ✨ 20+ Editor Plugins.
- ✅ Unit tested with `slate@0.58.1`.
- 🏷️ Separation of Concerns.
- ⚛️ Atomic Design.
- 📖
  [Docs](https://slate-plugins-next.netlify.app/?path=/docs/docs-getting-started--page)
  and
  [Demos](https://slate-plugins-next.netlify.app/?path=/story/plugins-playground--plugins)
  on Storybook.

## Table of contents

- 🚀 [Getting Started](../../README.md#-getting-started)
- 🔌 [Plugins](../../README.md#-plugins)
- 🤔 [Notice](../../README.md#-notice)
  - [Why](../../README.md#why)
  - [Bundle size](../../README.md#bundle-size)
- 👥 [Community](../../README.md#-community)
- 👏 [Contributing](../../README.md#-contributing)
  - 👨‍💻 [Development scripts](../../README.md#-development-scripts)
- ✨ [Contributors](../../README.md#contributors-)
- :memo: [License](../../README.md#license)

## 🚀 Getting Started

```bash
yarn add slate-plugins-next@0.58.7
```

> ⚠️ In production, you should pin the dependency until 1.0.0 is
> released.

You will also need these peerDependencies:

```bash
yarn add slate slate-hyperscript slate-react styled-components react react-dom
```

For full documentation on using `slate-plugins-next` visit:
[slate-plugins-next.netlify.app](https://slate-plugins-next.netlify.app/)

For additional help, join us in our
[Slack](https://app.slack.com/client/T1RFVK5FV/C013QHXSCG1)

## 🔌 Plugins

| Element Plugins                         |                             |
|:----------------------------------------|:----------------------------|
| [action item](src/elements/action-item) | List of action items        |
| [blockquote](src/elements/blockquote)   | Blockquote                  |
| [code](src/elements/code-block)               | `Code block`                |
| [heading](src/elements/heading)         | Heading (from 1 to 6)       |
| [image](src/elements/image)             | Image                       |
| [link](src/elements/link)               | Inline link                 |
| [list](src/elements/list)               | Bulleted and numbered lists |
| [mention](src/elements/mention)         | Inline mention              |
| [paragraph](src/elements/paragraph)     | Paragraph                   |
| [table](src/elements/table)             | Table                       |
| [video](src/elements/video)             | Video                       |

<img src="https://i.imgur.com/JAO2NPN.png" alt="blocks" width="400"/>


| Mark Plugins                             |                   |
|:-----------------------------------------|:------------------|
| [bold](src/marks/bold)                   | **Bold**          |
| [highlight](src/marks/highlight)         | Blockquote        |
| [inline-code](src/marks/code)     | `Code`            |
| [italic](src/marks/italic)               | *Italic*          |
| [strikethrough](src/marks/strikethrough) | ~~Strikethrough~~ |
| [subscript](src/marks/subscript)         | Subscript         |
| [superscript](src/marks/superscript)     | Superscript       |
| [underline](src/marks/underline)         | Underline         |

<img src="https://imgur.com/NQJgC5b.png" alt="marks" width="650"/>


| Deserializer Plugins                                   |                       |
|:-------------------------------------------------------|:----------------------|
| [deserialize-html](src/deserializers/deserialize-html) | HTML Deserializer     |
| [deserialize-md](src/deserializers/deserialize-md)     | Markdown Deserializer |

| Plugins                                  |                                                   |
|:-----------------------------------------|:--------------------------------------------------|
| [common](src/common)                     | Common helpers for all plugins                    |
| [components](src/components)             | Common UI components                              |
| [deserializers](src/deserializers)       | Common helpers for deserializers                  |
| [element](src/element)                   | Common helpers for `Element` plugins              |
| [mark](src/mark)                         | Common helpers for `Mark` plugins                 |
| [md preview](src/md-preview)             | Markdown preview                                  |
| [md shortcuts](src/md-shortcuts)         | Markdown shortcuts                                |
| [node](src/node)                         | Common helpers and `withPlugins` for `Node` nodes |
| [search highlight](src/search-highlight) | Highlight search text                             |
| [soft break](src/soft-break)             | Soft break                                        |

## 🤔 Notice

### Why

[Slate](https://github.com/ianstormtaylor/slate) is a powerful editor
framework that helps you deal with difficult parts when building an
editor, such as events handlers, elements, formatting, commands,
rendering, serializing, normalizing, etc.

While you are trying to build your own editors, it still need a lot of
efforts to make something similar to [Quill](https://quilljs.com/) or
[ProseMirror](https://prosemirror.net/). This repository allows you to
build your editor right away with **minimal** slate knowledge.

### Bundle size

For simplicity, a single package `slate-plugins-next` has been published
to share all the plugins. It's not a problem as
[it is tree-shakeable](https://bundlephobia.com/result?p=slate-plugins-next).
However, a few plugins use external dependencies. These should be moved
into their own package in the future.

## 👥 Community

- Chatting on
  [Slack](https://app.slack.com/client/T1RFVK5FV/C013QHXSCG1)

## 👏 [Contributing](../../CONTRIBUTING.md)

We welcome contributions to `slate-plugins-next`! Please feel free to
**share your own plugins** here.


📥 Pull requests and 🌟 Stars are always welcome. Read our
[contributing guide](../../CONTRIBUTING.md) to get started. or find us
on [Slack](https://app.slack.com/client/T1RFVK5FV/C013QHXSCG1), we're
will take the time to guide you

### 👨‍💻 Development scripts

Useful scripts include:

#### `yarn`

> Installs package dependencies

#### `yarn storybook`

> Starts storybook dev

#### `yarn lint`

> boolean check if code conforms to linting eslint rules

#### `yarn test`

> Test with Jest

#### `yarn release`

> Lint, test, build and push a release to git and npm will ask for
> version in interactive mode - using lerna.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://github.com/zbeyens"><img src="https://avatars3.githubusercontent.com/u/19695832?v=4" width="100px;" alt=""/><br /><sub><b>Ziad Beyens</b></sub></a><br /><a href="https://github.com/zbeyens/slate-plugins-next/commits?author=zbeyens" title="Code">💻</a> <a href="#maintenance-zbeyens" title="Maintenance">🚧</a> <a href="#plugin-zbeyens" title="Plugin/utility libraries">🔌</a> <a href="https://github.com/zbeyens/slate-plugins-next/commits?author=zbeyens" title="Tests">⚠️</a> <a href="https://github.com/zbeyens/slate-plugins-next/commits?author=zbeyens" title="Documentation">📖</a></td>
    <td align="center"><a href="http://horacioh.com"><img src="https://avatars3.githubusercontent.com/u/725120?v=4" width="100px;" alt=""/><br /><sub><b>Horacio Herrera</b></sub></a><br /><a href="https://github.com/zbeyens/slate-plugins-next/commits?author=horacioh" title="Code">💻</a> <a href="#plugin-horacioh" title="Plugin/utility libraries">🔌</a> <a href="#example-horacioh" title="Examples">💡</a> <a href="https://github.com/zbeyens/slate-plugins-next/issues?q=author%3Ahoracioh" title="Bug reports">🐛</a> <a href="#ideas-horacioh" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/eivindw"><img src="https://avatars2.githubusercontent.com/u/67761?v=4" width="100px;" alt=""/><br /><sub><b>Eivind Barstad Waaler</b></sub></a><br /><a href="https://github.com/zbeyens/slate-plugins-next/commits?author=eivindw" title="Code">💻</a> <a href="#plugin-eivindw" title="Plugin/utility libraries">🔌</a> <a href="#example-eivindw" title="Examples">💡</a> <a href="https://github.com/zbeyens/slate-plugins-next/issues?q=author%3Aeivindw" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://spetex.dev"><img src="https://avatars3.githubusercontent.com/u/9515499?v=4" width="100px;" alt=""/><br /><sub><b>Petr Sahula</b></sub></a><br /><a href="https://github.com/zbeyens/slate-plugins-next/commits?author=spetex" title="Code">💻</a> <a href="#plugin-spetex" title="Plugin/utility libraries">🔌</a> <a href="#example-spetex" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/vujevits"><img src="https://avatars1.githubusercontent.com/u/2270661?v=4" width="100px;" alt=""/><br /><sub><b>Mark Vujevits</b></sub></a><br /><a href="https://github.com/zbeyens/slate-plugins-next/commits?author=vujevits" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](../../LICENSE)
