import { connect } from "react-redux";
import {
  getActiveColor,
  getActiveColorShades,
  getPaletteColors,
  setActiveColor,
} from "../../modules/palette";

import PaletteGrid from "./PaletteGrid";

const mapStateToProps = (state) => ({
  paletteColors: getPaletteColors(state),
  paletteShades: getActiveColorShades(state),
  activeColor: getActiveColor(state),
});

const mapDispatchToProps = {
  setActiveColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaletteGrid);
