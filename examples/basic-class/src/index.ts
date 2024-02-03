export * from "./constructs/app/app";

export interface MyClassProps {
  /**
   * This is a unique identifier
   */
  id: string;
}

/**
 * This is some documentation
 */
export class MyClass {
  constructor(props: MyClassProps) {}

  /**
   * This is some method
   *
   * @returns {string} Test!
   */
  public myMethod() {
    return "Test";
  }
}
