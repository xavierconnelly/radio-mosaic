// pull in from this git repo https://github.com/mourner/suncalc
import SunCalc from 'suncalc';

export function getStage(lat, lng, date = new Date()) {
  const t = SunCalc.getTimes(date, lat, lng);
  const now = date.getTime();
  if (now < t.dawn)        return 'night';
  if (now < t.sunrise)     return 'dawn';
  if (now < t.goldenHourEnd) return 'morning';
  if (now < t.goldenHour)  return 'noon';
  if (now < t.sunsetStart) return 'afternoon';
  if (now < t.dusk)        return 'dusk';
  return 'night';
}