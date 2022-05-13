import { EasyRangeError } from './EasyRangeError'

const STR_RANGE_PATTERN: RegExp = /^([0-9]+)(\.[0-9]+)?-([0-9]+)(\.[0-9]+)?$/

/**
 * Represents a numerical range where each limit is inclusive and may take
 * the form of a whole integer or a floating point number. You may also
 * construct a EasyRange by using a string representation following the
 * pattern `START-END`. `EasyRange.contains` allows you to check whether or not a
 * value is contained with the current EasyRange instance.
 *
 * @example
 * let range = new EasyRange(1, 100)
 * range.start // 1
 * range.end // 100
 *
 * @example
 * let range = new EasyRange(1.567, 100.123)
 * range.start // 1.567
 * range.end // 100.123
 *
 * @example
 * let range = new EasyRange('1-100')
 * range.start // 1
 * range.end // 100
 *
 * @example
 * let range = new EasyRange(1, 100)
 * range.contains(50) // true
 * range.contains('1000') // false
 * range.contains(1000) // false
 */
export class EasyRange {
  start: number
  end: number

  constructor(start: number, end: number) {
    if (start > end) {
      throw new EasyRangeError(`End value must be greater than start value`)
    }
    this.start = start
    this.end = end
  }

  static fromString(strRange: string): EasyRange {
    if (!STR_RANGE_PATTERN.test(strRange)) {
      throw new EasyRangeError(`Given strRange ${strRange} is invalid. Must match pattern ${STR_RANGE_PATTERN}`)
    }

    const parts = strRange.split('-')
    const start = parseFloat(parts[0])
    const end = parseFloat(parts[1])

    return new EasyRange(start, end)
  }

  contains(value: string | number): boolean {
    if (typeof value === 'string') {
      value = parseFloat(value)
      if (isNaN(value)) {
        throw new EasyRangeError(`Could not parse ${value} string into a valid number`)
      }
    }

    return value >= this.start && value <= this.end
  }
}
