import * as React from "react";
import "./home-page.scss";
import Modal from "react-modal";
import Pagination from "rc-pagination";

import { BaseLayout } from "../../layouts/base-layout";
import { ReactComponent as DotsIcon } from "../../../assets/icons/dots.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";

import { Owners } from "../../base-ui/owners";
import { AddOwner } from "../../base-ui/add-owner";
import { memoryArr } from "./owner";

Modal.setAppElement("#root");

export const HomePage = () => {
  const [ownerList, setOwnerList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const divItemRender = (current, type, element) => {
    if (type === "prev") {
      return <ArrowIcon />;
    }
    if (type === "next") {
      return <ArrowIcon />;
    }
    return element;
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, []);
  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const renderList = React.useCallback(() => {
    const localArr = localStorage.getItem("rpokosov-metamins")
      ? JSON.parse(localStorage.getItem("rpokosov-metamins"))
      : [];
    const list = memoryArr.concat(localArr);

    setOwnerList(list);
  }, []);

  const handlerSubmit = React.useCallback(() => {
    closeModal();
    renderList();
  }, [closeModal, renderList]);

  const handlePageClick = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  React.useEffect(() => {
    renderList();
  }, [renderList]);

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
        <Owners items={ownerList} page={currentPage} />

        {ownerList.length > 10 && (
          <Pagination
            itemRender={divItemRender}
            onChange={handlePageClick}
            current={currentPage}
            total={ownerList.length}
            showTotal={(total, range) => (
              <>
                <div className="rc-pagination-total-text-item">
                  {currentPage}
                </div>{" "}
                of{" "}
                <div className="rc-pagination-total-text-item">
                  {Math.ceil(ownerList.length / 10)}
                </div>
              </>
            )}
          />
        )}
      </section>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <button className="close-modal" onClick={closeModal}>
          <CloseIcon />
        </button>
        <AddOwner onSubmitForm={handlerSubmit} />
      </Modal>
    </BaseLayout>
  );
};
