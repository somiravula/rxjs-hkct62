import './style.css';

import { of, map, timer, combineLatest, take } from 'rxjs';

let t = 0;
setInterval(() => {
  t++;
}, 1000);

const a = timer(4000, 2000).pipe(
  take(3),
  map((i) => 'a' + i)
);
const b = timer(3000, 1000).pipe(
  take(5),
  map((i) => 'b' + i)
);

const combined = combineLatest([a, b]);

combined.subscribe((res) => {
  console.log(t, res);
});

// Open the console in the bottom right to see results.
