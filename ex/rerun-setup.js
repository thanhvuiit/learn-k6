import exec from 'k6/execution';
export default function () {
  let expired = exec.scenario.startTime;
  let currenttime = new Date() - expired;
  console.log(expired);
  //1 hour = 59 minutes 3540000
  if (expired >= 1000) {
    setup();
  }
  http.get('https://test.k6.io/contacts.php');
  // Injecting sleep
  // Sleep time is 500ms. Total iteration time is sleep + time to finish request.
  sleep(0.5);
}
// k6 run k6-learn/rerun-setup.js