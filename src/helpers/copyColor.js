export function copyColorToClipboard(colorCode) {
  try {
    navigator.clipboard.writeText(colorCode).then(
      function () {
        /* clipboard successfully set */
        console.log("Copied " + colorCode);
      },
      function () {
        /* clipboard write failed */
        console.log("Went south copying " + colorCode);
      }
    );
  } catch (e) {
    /*
     * Add sentry for error logging
     */
    console.log("Copy failed", e);
  }
}
