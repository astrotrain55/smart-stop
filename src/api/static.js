import { Ajax } from './Ajax';

export default Promise.all([
  Ajax('/api/marsruty/stops.txt'),
  Ajax('/api/marsruty/stop_times.txt'),
  Ajax('/api/marsruty/trips.txt'),
  Ajax('/api/marsruty/shapes.txt'),
  Ajax('/api/marsruty/routes.txt'),
]).then(([stops, stopTimes, trips, shapes, routes]) => {
  return { stops, stopTimes, trips, shapes, routes };
});
