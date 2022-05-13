import { EasyRange } from '../EasyRange'

describe('EasyRange class methods', () => {
  test('Construct a valid integer range with integer values', async () => {
    let range = new EasyRange(1, 100)

    expect(range.start).toBe(1)
    expect(range.end).toBe(100)
  })

  test('Construct a valid integer range with negative integer values', async () => {
    let range = new EasyRange(-100, -5)

    expect(range.start).toBe(-100)
    expect(range.end).toBe(-5)
  })

  test('Construct a valid float range with integer values', async () => {
    let range = new EasyRange(1.567, 100.123)

    expect(range.start).toBe(1.567)
    expect(range.end).toBe(100.123)
  })

  test('Construct an invalid range with start value greater than end value', async () => {
    let throwFunc = () => {
      new EasyRange(100, 1)
    }
    expect(throwFunc).toThrow()
  })

  test('Construct an invalid range with start value greater than end value', async () => {
    let throwFunc = () => {
      new EasyRange(100, 1)
    }
    expect(throwFunc).toThrow()
  })

  test('Construct a valid integer range from string representation', async () => {
    let strRange = '1-100'
    let range = EasyRange.fromString(strRange)

    expect(range.start).toBe(1)
    expect(range.end).toBe(100)
  })

  test('Construct a valid float range from string representation', async () => {
    let strRange = '1.567-100.123'
    let range = EasyRange.fromString(strRange)

    expect(range.start).toBe(1.567)
    expect(range.end).toBe(100.123)
  })

  test('Construct an invalid integer range from string represetation with start value greater than end value', async () => {
    let throwFunc = () => {
      let strRange = '100-1'
      let range = EasyRange.fromString(strRange)
    }

    expect(throwFunc).toThrow()
  })

  test('Construct range from an invalid string representation', async () => {
    let throwFunc = () => {
      let strRange = 'abc100-1'
      let range = EasyRange.fromString(strRange)
    }

    expect(throwFunc).toThrow()
  })

  test('Check range contains number value when lower than start', async () => {
    let range = new EasyRange(1, 100)
    let val = -5

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains number value when greater than end', async () => {
    let range = new EasyRange(1, 100)
    let val = 1000

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains number value when within range', async () => {
    let range = new EasyRange(1, 100)
    let val = 50

    expect(range.contains(val)).toBe(true)
  })

  test('Check range based on string representation contains number value when within range', async () => {
    let range = EasyRange.fromString('1-100')
    let val = 50

    expect(range.contains(val)).toBe(true)
  })

  test('Check range contains string value when lower than start', async () => {
    let range = new EasyRange(1, 100)
    let val = '-5'

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains number value when greater than end', async () => {
    let range = new EasyRange(1, 100)
    let val = '1000'

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains number value when within range', async () => {
    let range = new EasyRange(1, 100)
    let val = '50'

    expect(range.contains(val)).toBe(true)
  })

  test('Check range based on string representation contains number value when within range', async () => {
    let range = EasyRange.fromString('1-100')
    let val = '50'

    expect(range.contains(val)).toBe(true)
  })

  test('Check range contains float value when lower than start', async () => {
    let range = new EasyRange(1, 100)
    let val = -5.567

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains float value when greater than end', async () => {
    let range = new EasyRange(1, 100)
    let val = 1000.567

    expect(range.contains(val)).toBe(false)
  })

  test('Check range contains float value when within range', async () => {
    let range = new EasyRange(1, 100)
    let val = 50.567

    expect(range.contains(val)).toBe(true)
  })

  test('Check range based on string representation contains float value when within range', async () => {
    let range = EasyRange.fromString('1-100')
    let val = 50.567

    expect(range.contains(val)).toBe(true)
  })
})
