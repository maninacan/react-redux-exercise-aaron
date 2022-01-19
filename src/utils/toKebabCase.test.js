import { toKebabCase } from "./toKebabCase";

test("converts string to kebab-case: ", () => {
  expect(toKebabCase("A fun time to live")).toEqual("a-fun-time-to-live");
  expect(toKebabCase("makeSomethingOfIt")).toEqual("make-something-of-it");
  expect(toKebabCase("life_is_a_journey")).toEqual("life-is-a-journey");
});
