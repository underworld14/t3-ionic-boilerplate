// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface PrayerTime {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
  };
  date: DateClass;
  meta: Meta;
}

export interface DateClass {
  readable: string;
  timestamp: string;
  gregorian: Gregorian;
  hijri: Hijri;
}

export interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: GregorianWeekday;
  month: GregorianMonth;
  year: string;
  designation: Designation;
}

export interface Designation {
  abbreviated: string;
  expanded: string;
}

export interface GregorianMonth {
  number: number;
  en: string;
}

export interface GregorianWeekday {
  en: string;
}

export interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: HijriWeekday;
  month: HijriMonth;
  year: string;
  designation: Designation;
  holidays: any[];
}

export interface HijriMonth {
  number: number;
  en: string;
  ar: string;
}

export interface HijriWeekday {
  en: string;
  ar: string;
}

export interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: { [key: string]: number };
}

export interface Method {
  id: number;
  name: string;
  params: Params;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Params {
  Fajr: number;
  Isha: number;
}
