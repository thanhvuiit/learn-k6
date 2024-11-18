import http from 'k6/http';
import { check, fail, sleep, group } from 'k6';

export default function () {
    group('Check, fail, sleep and sleep', function () {
        const res = http.get('https://k6.io');
        if (
            !check(res, {
                'status code MUST be 200': (res) => res.status == 200,
            })
        ) {
            fail('status code was *not* 200');
        }
        sleep(1);
    });
}