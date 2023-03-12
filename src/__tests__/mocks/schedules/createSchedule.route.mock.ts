const now = new Date();
const fiveMinutesAhead = new Date(now.getTime() + 5 * 60000);
export default {
  schedulesComplete: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: `${now.getHours()}:${fiveMinutesAhead.getMinutes()}`
  },
  schedulesRealEstateInvalidID: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: `${now.getHours()}:${fiveMinutesAhead.getMinutes()}`,
    realEstateId: 123456
  },
  schedulesUnique: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: `${now.getHours()}:${fiveMinutesAhead.getMinutes()}`
  },
  schedulesSameDateDifferentRealEstate: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: `${now.getHours()}:${fiveMinutesAhead.getMinutes()}`
  },
  schedulesBefore8AM: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: '05:00'
  },
  schedulesAfter18PM: {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`,
    hour: '19:00'
  },
  schedulesInvalidDate: {
    date: `2023-03-18`,
    hour: `${now.getHours()}:${fiveMinutesAhead.getMinutes()}`
  },
  schedulesInvalidBody: {
    date: 12345,
    hour: [],
    realEstateId: '12345'
  },
  schedulesInvalidBody2: {
    ignore_this_key: 'ignore essa chave'
  }
};
