import React from 'react';
import renderer from 'react-test-renderer';
import { Article } from '../Article';

describe("It should render with no crashing.", () => {
  it("should be render.", () => {
    expect(renderer.create(
      <Article title="title" body="body" />
    )).toMatchSnapshot();
  });
});
