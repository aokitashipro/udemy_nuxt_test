import 'dayjs/locale/ja'
import dayjs from 'dayjs'

dayjs.locale('ja')

export default(({ app }, inject ) => {
  inject('dayjs', string => dayjs(string))
})