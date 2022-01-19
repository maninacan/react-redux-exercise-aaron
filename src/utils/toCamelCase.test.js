import { toCamelCase } from "./toCamelCase";

test('converts string to camelCase: ', () => {
  expect(toCamelCase('A fun time to live')).toEqual('aFunTimeToLive');
  expect(toCamelCase('make-something-of-it')).toEqual('makeSomethingOfIt');
  expect(toCamelCase('life_is_a_journey')).toEqual('lifeIsAJourney');
});
