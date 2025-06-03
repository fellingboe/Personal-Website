
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'SQL injection seminar',
    start: todayStr + 'T14:00:00',
  },
  {
    id: createEventId(),
    title: 'Secure coding speaker',
    start: '2025-04-10' + 'T10:00:00',
    end: '2025-04-10' + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Lunch break',
    start: '2025-04-10' + 'T13:00:00',
    end: '2025-04-10' + 'T14:00:00',
  },
  {
    id: createEventId(),
    title: 'Pizza party',
    start: '2025-04-11' + 'T18:00:00',
    end: '2025-04-11' + 'T21:00:00',
  },
  {
    id: createEventId(),
    title: 'Inspection week',
    start: '2025-04-14',
    end: '2025-04-19',
    backgroundColor: 'purple',
    borderColor: 'purple',
  },
  {
    id: createEventId(),
    title: 'Easter bank holiday',
    start: '2025-04-21',
  },
  {
    id: createEventId(),
    title: 'mysterius future event',
    start: '2025-05-08',
  },
]

export function createEventId() {
  return String(eventGuid++)
}


/* 
An example of an event
var event = 
{   
  id: 'a',   
  title: 'sampleEvent',
  //date: '2025-03-15',
  //allDay: true
  start: '2025-03-15',
  end: '2025-03-18',
  editable: true, //This allows the event to be dragged and re-sized
  backgroundColor: 'green',
  borderColor: 'grey',
  description: 'sample Description'
}
*/