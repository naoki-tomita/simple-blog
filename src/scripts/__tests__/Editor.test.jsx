import React from 'react';
import renderer from 'react-test-renderer';
import { Editor } from '../Editor';

describe("Editor", () => {
  it("should render successful.", () => {
    expect(renderer.create(
      <Editor />
    )).toMatchSnapshot();
  });
})
