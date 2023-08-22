import { GalleryPhoto } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      item: { largeImageURL, webformatURL, tags },
    } = this.props;
    return (
      <>
        <GalleryPhoto src={webformatURL} alt={tags} onClick={this.openModal} />
        <ModalWindow isOpen={this.state.isModalOpen} isClose={this.closeModal}>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </>
    );
  }
}
