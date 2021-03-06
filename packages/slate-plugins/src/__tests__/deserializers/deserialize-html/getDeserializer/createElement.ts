import { getElementDeserializer } from 'element/utils';

const createElement = () => ({ type: 'p' });

const output = {
  p: createElement,
  P: createElement,
};

it('should be', () => {
  expect(
    getElementDeserializer('p', {
      tagNames: ['p', 'P'],
      createElement,
    })
  ).toEqual(output);
});
