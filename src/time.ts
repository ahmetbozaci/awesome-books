import { DateTime } from "luxon";

const insertTime = ():void => {
  const time: HTMLSpanElement = document.getElementById('local-time') as HTMLSpanElement;
  const now = DateTime.now();
  time.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

export default insertTime;