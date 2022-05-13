export class NumRangeError extends Error {
  constructor(message: string) {
    super(`NumRangeError: ${message}`)
  }
}
