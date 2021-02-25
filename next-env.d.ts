/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.csv" {
  const value: string[][];
  export default value;
}
