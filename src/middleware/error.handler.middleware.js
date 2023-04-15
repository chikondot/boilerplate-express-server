const throwAndLogError = function (file, error) {
  // TODO :: add error logging
  console.error(`${file}error: ${error}`);
  throw error;
};
