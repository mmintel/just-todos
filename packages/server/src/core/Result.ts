export interface HTTPResult<T = any> {
  message: 'success' | 'failure';
  data?: T;
}

export class Result {
  private constructor() {}

  static ok<T = any>(data?: T): HTTPResult {
    return {
      message: 'success',
      data,
    };
  }

  static fail(): HTTPResult {
    return {
      message: 'failure',
    };
  }
}
