const constants = [
  'AUTH_USER',
  'UNAUTH_USER',
  'AUTH_ERROR',
  'FETCH_RECORDINGS_',
];

constants.forEach((type) => {
  if (type.endsWith('_')) {
    Object.assign(module.exports, {
      [`${type}STARTED`]: `${type}STARTED`,
      [`${type}COMPLETED`]: `${type}COMPLETED`,
      [`${type}FAILED`]: `${type}FAILED`,
    });
  } else {
    Object.assign(module.exports, {
      [type]: type,
    });
  }
});
