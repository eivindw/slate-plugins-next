import { deserializeTextNode } from 'deserializers/deserialize-html/utils';

const input = document.createElement('div');

const output = undefined;

it('should be', () => {
  expect(deserializeTextNode(input)).toEqual(output);
});
