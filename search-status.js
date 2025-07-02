import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 300, // 300 pengguna bersamaan
  duration: '30s', // selama 30 detik
};

export default function () {
  let res = http.get('https://career.vasdev.co.id/?query=lorem');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
