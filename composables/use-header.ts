export default function () {

  const test = useState('hi', () => "initial")

  const rename = (that: string) => test.value = that

  return {
    test,
    rename
  }
}
