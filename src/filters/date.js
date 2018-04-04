export default (value) => {
  const date = new Date(value)
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ]
  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() +
', ' + date.getHours() + ':' + date.getMinutes()
}
