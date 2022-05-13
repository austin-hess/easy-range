const STR_RANGE_PATTERN: RegExp = /^([0-9]+)(\.[0-9]+)?-([0-9]+)(\.[0-9]+)?$/

export class NumRangeError extends Error {
  constructor(message: string) {
    super(`NumRangeError: ${message}`)
  }
}

/**
 * Represents a numerical range where each limit is inclusive and may take
 * the form of a whole integer or a floating point number. You may also
 * construct a NumRange by using a string representation following the
 * pattern `START-END`. `NumRange.contains` allows you to check whether or not a
 * value is contained with the current NumRange instance.
 *
 * @example
 * let range = new NumRange(1, 100)
 * range.start // 1
 * range.end // 100
 *
 * @example
 * let range = new NumRange(1.567, 100.123)
 * range.start // 1.567
 * range.end // 100.123
 *
 * @example
 * let range = new NumRange('1-100')
 * range.start // 1
 * range.end // 100
 *
 * @example
 * let range = new NumRange(1, 100)
 * range.contains(50) // true
 * range.contains('1000') // false
 * range.contains(1000) // false
 */
export class NumRange {
  start: number
  end: number

  constructor(start: number, end: number) {
    if (start > end) {
      throw new NumRangeError(`End value must be greater than start value`)
    }
    this.start = start
    this.end = end
  }

  static fromStrRange(strRange: string): NumRange {
    if (!STR_RANGE_PATTERN.test(strRange)) {
      throw new NumRangeError(`Given strRange ${strRange} is invalid. Must match pattern ${STR_RANGE_PATTERN}`)
    }

    let parts = strRange.split('-')
    let start = parseFloat(parts[0])
    let end = parseFloat(parts[1])

    return new NumRange(start, end)
  }

  contains(value: string | number): boolean {
    if (typeof value === 'string') {
      value = parseFloat(value)
      if (isNaN(value)) {
        throw new NumRangeError(`Could not parse ${value} string into a valid number`)
      }
    }

    return value >= this.start && value <= this.end
  }
}
