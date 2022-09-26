import * as R from "ramda";

const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

const slug = str => str.toLowerCase().split(" ").join("-");

const buildSelectOptions = values =>
  values.map(value => ({
    label: value,
    value: slug(value),
  }));

export { isPresent, buildSelectOptions };
