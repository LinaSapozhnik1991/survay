export const formatPhoneNumber = (value: string) => {
  const cleaned = ('' + value).replace(/[^+\d]/g, '')

  const match = cleaned.match(/^\+?(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  } else if (cleaned.length >= 10 && cleaned.length <= 15) {
    return cleaned
  }
  return value
}
