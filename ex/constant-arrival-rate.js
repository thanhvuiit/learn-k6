import http from 'k6/http';

export const options = {
  scenarios: {
    k6_workshop: {
      executor: 'constant-arrival-rate',
      rate: 10000,
      timeUnit: '1h',
      duration: '30s',
      preAllocatedVUs: 20,
      maxVUs: 50,
    },
  },
};

export default function () {
  console.log(`[VU: ${__VU}, iteration: ${__ITER}] Starting iteration...`);
  http.get('https://test.k6.io/contacts.php');
}
// k6 run k6-learn/constant-arrival-rate.js