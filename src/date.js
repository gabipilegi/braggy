export const today = () => new Date().toLocaleDateString('pt-BR')

export const formatedDate = (strDate) => {
  const date = new Date(strDate)
  const options = { month: 'short', year: 'numeric', day: 'numeric' }
  return new Intl.DateTimeFormat('pt-BR', options).format(date)
}
