import * as React from "react";
import "./home-page.scss";
import Modal from "react-modal";

import { BaseLayout } from "../../layouts/base-layout";
import { ReactComponent as DotsIcon } from "../../../assets/icons/dots.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

import { Owners } from "../../base-ui/owners";
import { AddOwner } from "../../base-ui/add-owner";

Modal.setAppElement("#root");

export const HomePage = () => {
  const ownerList = React.useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, []);
  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const customStyles = {
    content: {
      width: "300px",
      maxWidth: "300px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "visible",
    },
  };

  return (
    <BaseLayout>
      <header className="header">
        <h1>Overview</h1>
        <div className="header-control">
          <button className="btn btn-secondary">
            <DotsIcon />
          </button>
          <button className="btn btn-confirm" onClick={openModal}>
            Add
          </button>
        </div>
      </header>
      <section>
        <Owners ref={ownerList} />
      </section>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <button className="close-modal" onClick={closeModal}>
          <CloseIcon />
        </button>
        <AddOwner
          onSubmitForm={() => {
            closeModal();
            ownerList.current.renderList();
          }}
        />
      </Modal>
    </BaseLayout>
  );
};
