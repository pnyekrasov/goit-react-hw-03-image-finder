import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = (
  isOpen,
  onRequestClose,
  { item: { largeImageURL, tags } }
) => {
  <div isOpen={isOpen} onRequestClose={onRequestClose}>
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  </div>;
};
