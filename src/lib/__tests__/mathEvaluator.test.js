import { evaluateExpression } from "../mathEvaluator";

describe("mathEvaluator", () => {
  test("evaluates simple addition", () => {
    const result = evaluateExpression("2 + 3");
    expect(result).toBe(5);
  });

  test("respects operator precedence", () => {
    const result = evaluateExpression("2 + 3 * 4");
    expect(result).toBe(14);
  });

  test("handles parentheses correctly", () => {
    const result = evaluateExpression("(2 + 3) * 4");
    expect(result).toBe(20);
  });

  test("returns null for invalid expressions", () => {
    const result = evaluateExpression("2 +");
    expect(result).toBeNull();
  });

  test("returns null for non-math input", () => {
    const result = evaluateExpression("alert(1)");
    expect(result).toBeNull();
  });

  test("returns null for disabled functions", () => {
    const result = evaluateExpression("import('fs')");
    expect(result).toBeNull();
  });

  test("returns null for unit usage", () => {
    const result = evaluateExpression("5 cm");
    expect(result).toBeNull();
  });
});
