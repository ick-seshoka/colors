import { connect } from "react-redux";
import { getActiveColorShades, getPaletteColors } from "../../modules/palette";

import PaletteGrid from "./PaletteGrid";

const mapStateToProps = (state) => ({
  paletteColors: getPaletteColors(state),
  paletteShades: getActiveColorShades(state),
});

export default connect(mapStateToProps)(PaletteGrid);
