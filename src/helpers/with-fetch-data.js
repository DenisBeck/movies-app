/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import { Alert } from 'antd';

import Error from '../components/error';
import Loader from '../components/loader';

const withFetchData = (View) =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        loading: false,
        error: null,
      };

      this.fetchMovieApi = async () => {
        const { movieApiMethod, ratings } = this.props;
        if (movieApiMethod || ratings) {
          this.setState({
            data: null,
            loading: true,
          });
          try {
            const result = await movieApiMethod.name(...movieApiMethod.args);
            this.setState({
              data: result,
            });
          } catch (err) {
            this.setState({
              error: err,
            });
          } finally {
            this.setState({
              loading: false,
            });
          }
        }
      };
    }

    componentDidMount() {
      this.fetchMovieApi();
    }

    componentDidUpdate(prevProps) {
      const { movieApiMethod } = this.props;
      if (movieApiMethod !== prevProps.movieApiMethod) {
        this.fetchMovieApi();
      }
    }

    render() {
      const { data, error, loading } = this.state;
      const { movieApiMethod } = this.props;

      if (movieApiMethod && movieApiMethod.args[0] === '') {
        return (
          <Alert type="info" message="Movies List is Empty" description="type keywords in search input to get movies" />
        );
      }

      if (loading) {
        return <Loader />;
      }

      if (error) {
        return <Error message={error.message} />;
      }

      if (!data) {
        return <View {...this.props} />;
      }

      if (!data.totalCount) {
        return <Alert type="info" message="No Movies" description="No movies found" />;
      }

      return <View data={data} {...this.props} />;
    }
  };

export default withFetchData;
