export const formatFloatingPoint = (input: string): string => {
  const normalizedInput = input.replace(',', '.')
  const numberValue = parseFloat(normalizedInput)

  if (isNaN(numberValue)) {
    return 'Некорректный ввод'
  }
  return numberValue.toFixed(2)
}
