/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for (const email of emails) {
    const [, local, domain] = email.match(/(.*)@(.*)/);
    const user = local.replace(/\./g, '').replace(/\+.*/, '');
    const key = `${user}@${domain}`;
    set.add(key);
  }
  return set.size;
};
