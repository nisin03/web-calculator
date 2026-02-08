import { create, all } from "mathjs";

const math = create(all, {});

math.import(
  {
    import: function () {
      throw new Error("Function import is disabled");
    },
    createUnit: function () {
      throw new Error("Units are disabled");
    }
  },
  { override: true }
);

export function evaluateExpression(expression) {
  try {
    const result =  math.evaluate(expression);
    if (typeof result !== "number" || !Number.isFinite(result)) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error)
    return null; // TODO: add better error handling
  }
}
