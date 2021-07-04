import { useState } from "react";
import { Modal, Button } from "antd";

export const AddMovie = (props) => {
  //React Hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalPoster, setmodalPoster] = useState("");
  const [modalRating, setmodalRating] = useState("");
  const [modalDescription, setmodalDescription] = useState("");
  //Modal  visibility
  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  // Add movie data
  const modalPosterChange = (e) => {
    setmodalPoster(e.target.value);
  };
  const modalRatingChange = (e) => {
    setmodalRating(e.target.value);
  };
  const modalDescriptionChange = (e) => {
    setmodalDescription(e.target.value);
  };

  const modalTitleChange = (e) => {
    setmodalTitle(e.target.value);
  };

  const handleClickOk = () => {
    props.onAdd({
      title: modalTitle,
      rate: modalRating,
      posterUrl: modalPoster,
      description: modalDescription,
    });
    setModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <p className="addBtn">+</p>
      </Button>
      <Modal
        title="Add Movie"
        visible={modalVisible}
        onOk={handleClickOk}
        onCancel={handleCancel}
        className="modal"
      >
        <label>Movie title :</label>
        <br />
        <input
          type="text"
          placeholder="Movie title..."
          value={modalTitle}
          onChange={modalTitleChange}
        ></input>
        <br />
        <label>Movie Poster :</label>
        <br />
        <input
          type="text"
          placeholder="Poster URL..."
          value={modalPoster}
          onChange={modalPosterChange}
        ></input>
        <br />
        <label>Movie Rating :</label>
        <br />
        <input
          type="number"
          placeholder="Rating...."
          value={modalRating}
          onChange={modalRatingChange}
        ></input>
        <br />
        <label>Description :</label>
        <br />
        <textarea
          type="text"
          placeholder="Description"
          value={modalDescription}
          onChange={modalDescriptionChange}
          cols="35"
          rows="8"
        ></textarea>
      </Modal>
    </>
  );
};
