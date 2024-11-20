/**
 * @file k6-run-script
 * @author Vui Nguyen <thanhvui.it@gmail.com>
 * @description Test script single scenario.
 */
import http from 'k6/http';
import exec from 'k6/execution';
import { scenario } from 'k6/execution';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { randomItem, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { THRESHOLDS_SETTINGS, SMOKE_LOAD, AVERAGE_LOAD, LIMIT_LOAD, STRESS_LOAD } from './config.js';
import html from './k6-core/html.js';
import check_func from './k6-core/check.js';
import init_func from './k6-core/init.js';

// The k6 options object that defines thresholds, scenarios, user agent, and tags for the load test.
export const options = {
  thresholds: THRESHOLDS_SETTINGS,
  scenarios: {
    load_test_type: SMOKE_LOAD,
  },
  noConnectionReuse: true,
  discardResponseBodies: false,
  userAgent: 'K6UserAgentString/1.0',
  tags: { testid: 'K6UserAgentString/1.0', },
};

// Global variables
const data = new SharedArray('users', function () {
  // here you can open files, and then do additional processing or generate the array with data dynamically
  const f = JSON.parse(open('./k6-core/users.json'));
  return f; // f must be an array[]
});

// Setup for the test script.
export function setup() {
  console.log('Setup');
  // return data
}

// Main function for the test script.
export default () => {
  console.log('Main');
  // init_func(randomItem(data));
  // html();
  // check_func();
}

// Teardown for the test script.
export function teardown(data) {
  // Clear data here
  console.log('Teardown');
}
// k6 run k6-run-script.js --iterations 1 --vus 1