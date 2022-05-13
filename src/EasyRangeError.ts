export class EasyRangeError extends Error {
  constructor(message: string) {
    super(`NumRangeError: ${message}`)
  }
}
