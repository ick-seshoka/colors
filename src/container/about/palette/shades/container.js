import { connect } from "react-redux";
import {
  getActiveColor,
  getActiveColorShades,
} from "../../../../modules/palette";

import Shades from "./Shades";

const mapStateToProps = (state) => ({
  activeColor: getActiveColor(state),
  shades: getActiveColorShades(state),
});

export default connect(mapStateToProps)(Shades);
