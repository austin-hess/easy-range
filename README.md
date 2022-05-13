# EasyRange

Library for defining and comparing numerical ranges

## Installation

Using npm:

```
npm install numrange
```

Using yarn:

```
yarn add numrange
```

## Usage

### Creating new range from integers

```
let range = new NumRange(1, 100)
range.start // 1
range.end // 2
```

### Creating new range from floats

```
let range = new NumRange(1.123, 100.567)
range.start // 1.123
range.end // 100.567
```

### Creating new range from string representation

```
let range = NumRange.fromString('1-100')
range.start // 1
range.end // 100
```

### Testing if a value is within a range

```
let range = new NumRange(1, 100)
range.contains(-5) // false
range.contains(50) // true
range.contains(105) // false
```
