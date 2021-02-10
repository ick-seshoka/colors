import { connect } from "react-redux";
import {
  getActiveColor,
  getPaletteColors,
  setActiveColor,
} from "../../../modules/palette";

import Palette from "./Palette";

const mapStateToProps = (state) => ({
  paletteColors: getPaletteColors(state),
  activeColor: getActiveColor(state),
});

const mapDispatchToProps = {
  setActiveColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
