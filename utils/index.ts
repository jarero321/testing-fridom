
const validField = (value: string): boolean => {
  return Boolean(value.length > 0)
}

const validContinueForm = (obj: unknown): boolean => {
  let continueTmp = true
  const objTmp: any = obj
  Object.keys(objTmp).forEach((key: string) => {
    if (typeof objTmp[key] === 'object') {
      Object.keys(objTmp[key]).forEach((secondKey: string) => {
        if (!objTmp[key][secondKey]) {
          continueTmp = false
        }
      })
    } else if (!objTmp[key]) {
      continueTmp = false
    }
  })
  return continueTmp
};
export {  validContinueForm, validField }
