/**
 * @file k6-run-parallel-script
 * @author Vui Nguyen <thanhvui.it@gmail.com>
 * @description Test script multi scenarios.
 */
import { sleep, group, check } from 'k6';
import http from 'k6/http';
import { THRESHOLDS_SETTINGS, SMOKE_LOAD, AVERAGE_LOAD, STRESS_LOAD } from './config.js';

// The k6 options object that defines thresholds, scenarios, user agent, and tags for the load test.
export const options = {
  thresholds: THRESHOLDS_SETTINGS,
  scenarios: {
    scenario_ui: Object.assign({}, SMOKE_LOAD, { exec: 'scenario_uiTest' }),
    scenario_br: Object.assign({}, SMOKE_LOAD, { exec: 'scenario_brTest' }, { options: { browser: { type: 'chromium' },} }),
  },
  noConnectionReuse: true,
  discardResponseBodies: true,
  userAgent: 'K6UserAgentString/1.0',
  tags: { testid: 'K6UserAgentString/1.0', },
};

// Global variables

// Setup function for the test script.
export function setup() {
  // return data
  console.log('Setup');
}

// Main function for the scenario UI.
export function scenario_uiTest() {
  console.log('scenario_brTest');
}

// Main function for the scenario BROWSER.
export function scenario_brTest() {
  console.log('scenario_brTest');
}

// Teardown for the test script.
export function teardown() {
  // Clear data here
  console.log('Teardown');
}
// k6 run k6-run-parallel-script.js