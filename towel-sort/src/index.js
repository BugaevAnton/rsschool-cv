
// // You should implement your task here.
// //[1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// (() => {
//   const initData =   [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//    ]

//    const sortedRes = initData.map((arr, index) => {
//     if (index%2 === 0) {
//       return arr
//     }
//     return arr.reverse()
//   })

//   console.log('sortedRes', sortedRes.reduce((acc, itemArr) => {
//     console.log('spred', ...itemArr)
//     acc.push(...itemArr)
//     return acc
//   }, []))


// })()

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  // 1 - определить правильные последовательности внутренних масивов
  // 2 - склеить масивы в один
  const sortedRes = matrix.map((arr, index) => {
    if (index%2 === 0) {
      return arr
    }
    return arr.reverse()
  })

  return sortedRes.reduce((acc, itemArr) => {
    acc.push(...itemArr) // acc.push(4,5,6)
    return acc
  }, [])
}

//   //   for(let i = 0; i < matrix.length && matrix[i].length > 1; i++){
//   //     if(i % 2 !== 0) {
//   //       matrix[i].reverse();
//   //     }
//   //   }
  // return matrix.join('').split(',').map(Number);
// }

