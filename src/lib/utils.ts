import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { randomBytes } from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};


export function getCurrentDay(day: any) {
  return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
};

// export function getMonth(month: number = dayjs().month(), year: any = dayjs().year()) {
//   const firstDayofTheMonth = dayjs(new Date(year, month, 1)).day();
//   let currentMonthCount = 0 - firstDayofTheMonth;
//   const dayMatrix = new Array(5).fill([]).map(() => {
//     return new Array(7).fill(null).map(() => {
//       currentMonthCount++
//       return dayjs(new Date(year, month, currentMonthCount));
//     })
//   })

//   return dayMatrix;
// };

export function getMonth(month = dayjs().month(), year = dayjs().year()) {
  const firstDayofTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayofTheMonth;
  const dayMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount)).toISOString();
    });
  });

  return dayMatrix;
};

const deserializeDate = (dateString: string) => dayjs(dateString);

export const deserializeMonth = (month: any) => {
  return month.map((week: any) =>
    week.map((dayString: any) => deserializeDate(dayString))
  );
};

export function excludeDisabledWeek(month: any) {
  const lastWeek = month.slice(5)[0]
  const lastRow = lastWeek.find((date: any) => { return date.date() > 18 })
  if (!lastRow) {
    return { month: month.slice(0, 5), lastRow: false };
  }
  if (lastRow) {
    return { lastRow: true, month };
  }
};

export function getDayHours(day = dayjs().date(), month = dayjs().month(), year = dayjs().year()) {
  const hourMatrix = new Array(1).fill([]).map(() => {
    return new Array(24).fill(null).map((_, hour) => {
      return dayjs(new Date(year, month, day, hour)).toISOString();
    });
  });

  return hourMatrix;
};

export function deserializeDayHours(hourMatrix: any) {
  return hourMatrix[0].map((isoString: string) => {
    return dayjs(isoString).format('HH:mm');
  });
};

dayjs.extend(duration);

function formatHoursToHHmm(hours: number): string {
  const totalMinutes = Math.round(hours * 60); // Convert hours to minutes
  const formattedDuration = dayjs.duration(totalMinutes, 'minutes');
  return formattedDuration.format('HH:mm');
};

export function getTimeInHours(position: number): string {
  const pixelsPerHour = 60;
  const hours = position / pixelsPerHour;
  return formatHoursToHHmm(hours);
};

export function calculateStartAndEndTimes(top: number, height: number): { start: string, end: string } {
  const start = getTimeInHours(top);
  const end = getTimeInHours(top + height);
  return { start, end };
};

export function roundToNearestFive(num: number): number {
  const remainder = num % 5;
  if (remainder === 0) {
    return num;
  }
  if (remainder >= 3) {
    return num + (5 - remainder);
  } else {
    return num - remainder;
  }
};

export function roundToNearestSixty(num: number): number {
  const remainder = num % 60;
  if (remainder === 0) {
    return num;
  }
  if (remainder >= 30) {
    return num + (60 - remainder);
  } else {
    return num - remainder;
  }
};

export function getCurrentWeekInMonth(month: any) {
  let weekIdx = 0
  month.map((week: any, i: number) => {
    week.find((dayString: string) => {
      if (dayjs(new Date()).month() === deserializeDate(dayString).month() && dayjs(new Date()).date() === deserializeDate(dayString).date()) {
        weekIdx = i
      }
    })
  })
  return weekIdx;
};

export const generateUID = (): number => {
  // Use the crypto API to generate a random array of bytes and convert it to a string
  const now = Date.now(); // Current timestamp in milliseconds
  const randomPart = Math.floor(Math.random() * 1000000000); // Random number part
  const randomPart2 = parseInt(randomBytes(4).toString('hex'), 16);
  return Number(`${now}${randomPart}${randomPart2}`);
};

// let counter = 0;

// export const generateUID = (): number => {
//   // Increment the counter for each call
//   counter++;

//   // Generate a random part using crypto API
//   const randomPart = randomBytes(4).toString('hex'); // 4 bytes = 32 bits of randomness

//   // Combine the counter and the random part to form the UID
//   const uid = `${counter}${randomPart}`;

//   return Number(uid);
// };


export function roundToNearestDay(num: number, EventRect: any): number {
  const width = EventRect.right - EventRect.left
  const remainder = num % width;
  if (remainder === 0) {
    return num;
  }
  if (remainder >= 30) {
    return num + (width - remainder);
  } else {
    return num - remainder;
  }
};