import { sleep } from 'k6';

export default (row) => {
  console.log(`${row.username}, ${row.password}`);
  sleep(3);
};