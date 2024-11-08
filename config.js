/**
 * Thresholds are the pass/fail criteria for test metrics
 */
export const THRESHOLDS_SETTINGS = {
  http_req_failed: [{
    threshold: 'rate<0.1',
    abortOnFail: true
  }],
  http_req_duration: [{
    threshold: 'avg<8000',
    abortOnFail: true
  }],
  checks: [{
    threshold: 'rate>=0.1',
    abortOnFail: true
  }]
};

/**
 * Validate that your script works and that the system performs adequately under minimal load.
 */
export const SMOKE_LOAD = {
  executor: 'per-vu-iterations',
  vus: 10,
  iterations: 105,
  maxDuration: '5m30s'
};

/**
 * Assess how your system performs under expected normal conditions.
 */
export const AVERAGE_LOAD = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '30s', target: 10 },     // traffic ramp-up from 1 to 10 users over 10 seconds.
    { duration: '10m', target: 10 },     // stay at 10 users for 10 minutes
    { duration: '10s', target: 0 },      // ramp-down to 0 users
  ],
  gracefulRampDown: '10s',
};

/**
 * Assess how your system performs under expected rate requests.
 */
export const LIMIT_LOAD = {
  executor: 'constant-arrival-rate',
  rate: 24000,
  timeUnit: '30m',
  duration: '5m',
  preAllocatedVUs: 50,
};

/**
 * Assess how a system performs at its limits when load exceeds the expected average.
 */
export const STRESS_LOAD = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '10s', target: 20 },     // traffic ramp-up from 1 to 20 users over 10 seconds.
    { duration: '5m', target: 20 },     // stay at 20 users for 10 minutes
    { duration: '10s', target: 0 },      // ramp-down to 0 users
  ],
  gracefulRampDown: '10s',
};

/**
 * Assess the reliability and performance of your system over extended periods.
 */
export const SOAK_LOAD = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '1m', target: 100 },    // traffic ramp-up from 1 to 100 users over 2 minutes.
    { duration: '1h', target: 100 },   // stay at 100 users for 1 hour!!!
    { duration: '2m', target: 0 },      // ramp-down to 0 users
  ],
  gracefulRampDown: '30s',
};

/**
 * Validate the behavior and survival of your system in cases of sudden, short, and massive increases in activity.
 */
export const SPIKE_LOAD = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '2m', target: 2000 },   // fast ramp-up to a high point
    { duration: '1m', target: 0 },      // quick ramp-down to 0 users
  ],
  gracefulRampDown: '30s',
};

/**
 * Gradually increase load to identify the capacity limits of the system.
 */
export const BREAKING_LOAD = {
  executor: 'ramping-arrival-rate',
  preAllocatedVUs: 50,
  startRate: 300,
  stages: [
    { duration: '1m', target: 300 },    // Start 300 iterations per `timeUnit` for the first minute.
    { duration: '2m', target: 600 },    // Linearly ramp-up to starting 600 iterations per `timeUnit` over the following two minutes.
    { duration: '1h', target: 20000 },  // just slowly ramp-up to a HUGE load
    { duration: '2m', target: 300 },    // Linearly ramp-down to starting 60 iterations per `timeUnit` over the last two minutes.
  ],
};