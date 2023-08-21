import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchPhotos } from 'pixabay-api';
import { Container } from './App.styled';

const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  hendleChangeQuery = newQuery => {
    !newQuery
      ? alert('Enter the data in the field "Search images and photos", please')
      : this.setState({
          query: `${Date.now()}/${newQuery}`,
          images: [],
          page: 1,
        });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const index = this.state.query.indexOf('/') + 1;
      const currentQuery = this.state.query.slice(index);
      const currentpage = this.state.page;
      const photos = await fetchPhotos(currentQuery, currentpage);
      this.setState({ images: photos.hits });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <Container>
        <Searchbar onChange={this.hendleChangeQuery} />
        <ImageGallery items={images} />
        <Button onClick={this.handleLoadMore} />
      </Container>
    );
  }
}
