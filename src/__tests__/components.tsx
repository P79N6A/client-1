import React from "react";
import renderer from "react-test-renderer";
import Logo from "../components/Logo";

test("渲染Logo组件快照", () => {
  const component = renderer.create(<Logo />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
