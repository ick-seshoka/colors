import { connect } from "react-redux";
import { getActiveColor } from "../../modules/palette";

import Home from "./Home";

const mapStateToProps = (state) => ({
  activeColor: getActiveColor(state),
});

export default connect(mapStateToProps)(Home);
