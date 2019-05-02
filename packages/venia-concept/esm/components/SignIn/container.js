import { connect } from "@magento/venia-drivers";
import SignIn from "./signIn";
import { signIn } from "../../actions/user";

const mapStateToProps = ({
  user
}) => {
  const {
    signInError
  } = user;
  return {
    signInError
  };
};

const mapDispatchToProps = {
  signIn
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
//# sourceMappingURL=container.js.map