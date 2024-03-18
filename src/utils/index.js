export const discussTrans = (data = []) => {
  const getReplies = (id) => {
    return data
      .filter((item) => item.replayId === id)
      .map((item) => {
        return { ...item, asList: getReplies(item.idDiscussion) }
      })
  }

  const qsList = data.filter((item) => item.replayId === 0)
  const qsListWithAs = qsList.map((item) => {
    return { ...item, asList: getReplies(item.idDiscussion) }
  })
  let xx = qsListWithAs
  function countLikes(data) {
    let count = 0

    data.forEach((item) => {
      if (item.like === 1) {
        count++
      }
      if (item.asList && item.asList.length > 0) {
        count += countLikes(item.asList)
      }
    })

    return count
  }
  console.log(countLikes(xx))

  // const countLikes = (data) => {
  //   data.map((item) => {
  //     let count = 0
  //     if (item.like === 1) {
  //       count++
  //     }

  //     if (item.asList && item.asList.length > 0) {
  //       item.asList.forEach((_item) => {
  //         count += countLikes(_item)
  //       })
  //     }
  //     console.log('count', count)
  //     return count
  //   })
  // }
  // countLikes(qsListWithAs)
  return qsListWithAs
}
