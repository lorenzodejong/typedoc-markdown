export interface AppProps {
  /**
   * This is a unique identifier
   */
  id: string;
}

/**
 * This is some documentation
 */
export class App {
  constructor(props: AppProps) {}

  /**
   * This is some method
   *
   * @returns {string} Test!
   */
  public myMethod() {
    return "Test";
  }
}
