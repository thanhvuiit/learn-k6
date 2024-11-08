/**
 * @file k6-run-script
 * @author Vui Nguyen <thanhvui.it@gmail.com>
 * @description Test script single scenario.
 */
import http from 'k6/http';
import exec from 'k6/execution';
import { scenario } from 'k6/execution';
import { check, sleep } from 'k6';
import { THRESHOLDS_SETTINGS, SMOKE_LOAD, AVERAGE_LOAD, STRESS_LOAD } from './config.js';

// The k6 options object that defines thresholds, scenarios, user agent, and tags for the load test.
export const options = {
  thresholds: THRESHOLDS_SETTINGS,
  scenarios: {
    load_test_type: SMOKE_LOAD,
  },
  noConnectionReuse: true,
  discardResponseBodies: true,
  userAgent: 'K6UserAgentString/1.0',
  tags: { testid: 'K6UserAgentString/1.0', },
};

// Global variables

// Setup for the test script.
export function setup() {
  // return data
  console.log('Setup');
}

// Main function for the test script.
export default function () {
  console.log('Main code');
}

// Teardown for the test script.
export function teardown(data) {
  // Clear data here
  console.log('Teardown');
}
// k6 run k6-run-script.js