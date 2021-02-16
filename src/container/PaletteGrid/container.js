import { connect } from "react-redux";
import {
  getActiveColor,
  getActiveColorShades,
  getPaletteColors,
  setActiveColor,
  getActiveShade,
  setActiveShade,
} from "../../modules/palette";

import PaletteGrid from "./PaletteGrid";

const mapStateToProps = (state) => ({
  paletteColors: getPaletteColors(state),
  paletteShades: getActiveColorShades(state),
  activeColor: getActiveColor(state),
  activeShade: getActiveShade(state),
});

const mapDispatchToProps = {
  setActiveColor,
  setActiveShade,
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(PaletteGrid);
