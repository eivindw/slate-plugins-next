import { DeserializeHtml } from 'common/types';
import { VIDEO, VideoDeserializeOptions } from './types';

export const deserializeIframe = ({
  typeVideo = VIDEO,
}: VideoDeserializeOptions = {}): DeserializeHtml => {
  const createElement = (el: HTMLElement) => {
    let url = el.getAttribute('src');
    if (url) {
      [url] = url.split('?');

      return {
        type: typeVideo,
        url,
      };
    }
  };

  return {
    element: {
      IFRAME: createElement,
    },
  };
};
