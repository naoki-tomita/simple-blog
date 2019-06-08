import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

describe("Editor", () => {
  it("should render successful.", () => {
    expect(renderer.create(
      <Header />
    )).toMatchSnapshot();
  });
})
