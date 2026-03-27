export function print(...args) {
  console.log(...args)
}

export function defineArray(...args) {
  return args
}

export function isThirteen(x) {
  return {
    thirteen: function () {
      return x === 13
    },
    add: function (y) {
      return isThirteen(x + y)
    },
    sub: function (y) {
      return isThirteen(x - y)
    },
    mul: (y) => {
      return isThirteen(x * y)
    },
    div: y => {
      return isThirteen(x / y)
    }
  }
}