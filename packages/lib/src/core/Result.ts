interface HTTPResultWithData<T> extends HTTPResultWithoutData {
  message: "success" | "failure";
  data: T;
}

interface HTTPResultWithoutData {
  message: "success" | "failure";
}

export type HTTPResult<T = any> = T extends null | undefined
  ? HTTPResultWithoutData
  : HTTPResultWithData<T>;

export class Result {
  private constructor() {}

  static ok<T = any>(data?: T): HTTPResult {
    return {
      message: "success",
      data,
    };
  }

  static fail(): HTTPResult {
    return {
      message: "failure",
    };
  }
}
