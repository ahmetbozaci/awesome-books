import luxon from 'luxon';
console.log('hell');
const insertTime = () => {
    const time = document.getElementById('local-time');
    console.log(time);
    const now = luxon.DateTime.now();
    console.log(now);
    time.innerHTML = now.toLocaleString(luxon.DateTime.DATETIME_MED);
};
export default insertTime;
