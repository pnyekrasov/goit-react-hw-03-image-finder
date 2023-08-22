import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchPhotos } from 'pixabay-api';
import { Container } from './App.styled';
import { Loader } from './Loader/Loader';
import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PER_PAGE = 12;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    total: 1,
  };

  hendleChangeQuery = newQuery => {
    const notify = () =>
      toast.error(
        'Enter the data in the field "Search images and photos", please'
      );

    !newQuery.trim()
      ? notify()
      : this.setState({
          query: `${Date.now()}/${newQuery}`,
          images: [],
          page: 1,
          loading: false,
          total: 1,
        });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });

        const index = this.state.query.indexOf('/') + 1;
        const currentQuery = this.state.query.slice(index);
        const currentpage = this.state.page;
        const { totalHits, hits } = await fetchPhotos(
          currentQuery,
          currentpage
        );

        this.setState(prevState => ({
          total: totalHits,
          images: [...prevState.images, ...hits],
        }));

        const notify = () =>
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        totalHits === 0 && notify();
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { total, loading, images, page } = this.state;
    const limit = Math.ceil(total / PER_PAGE);

    return (
      <Container>
        <Searchbar onChange={this.hendleChangeQuery} />
        {images.length > 0 && <ImageGallery items={images} />}
        {loading && <Loader />}
        {images.length > 0 && page !== limit && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    );
  }
}
