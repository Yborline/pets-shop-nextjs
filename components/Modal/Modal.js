import { useRouter } from "next/router";
import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalConent } from "./Modal.styled";
import { withRouter } from "next/router";

// const modalRoot = document.querySelector(`#modal-root`);

class Modal extends Component {
  state = {
    path: "",
  };

  componentDidMount() {
    console.log("mont");
    // console.log(this.props.path);
    // console.log(this.props.path);

    this.setState((prevState) => ({ path: this.props.path }));
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("rozmont");
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    if (this.props.router.pathname !== this.state.path) {
      this.props.close();
    }
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.close();
    }
  };

  hndleBackdropClick = (event) => {
    // {currentTarget ,target} = event
    if (event.currentTarget === event.target) {
      this.props.close();
    }
  };

  render() {
    console.log();
    return createPortal(
      <Backdrop onClick={this.hndleBackdropClick}>
        <ModalConent>{this.props.children}</ModalConent>
      </Backdrop>,
      document.querySelector(`#modal-root`)
    );
  }
}

export default withRouter(Modal);
