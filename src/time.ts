import { DateTime } from "luxon";

const insertTime = ():void => {
  const time = document.getElementById('local-time') as HTMLSpanElement;
  const now = DateTime.now();
  time.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
}
console.log(2)
export default insertTime;