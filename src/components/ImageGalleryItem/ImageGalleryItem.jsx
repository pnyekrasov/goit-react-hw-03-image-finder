import Modal from 'react-modal';
import { GalleryPhoto } from './ImageGalleryItem.styled';

const { Component } = require('react');

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      item: { webformatURL, tags },
    } = this.props;
    return (
      <>
        <GalleryPhoto src={webformatURL} alt={tags} onClick={this.openModal} />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          item={this.props}
        />
      </>
    );
  }
}
