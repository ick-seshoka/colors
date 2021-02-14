export function copyColorToClipboard(colorCode) {
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
}
