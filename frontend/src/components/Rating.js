function Rating(props) {
  const { rating, numReviews } = props;
  console.log('Ankit testing', props);
  return (
    // change css design for rating
    <div className="rating">
      {/** to show a star in rating */}
      <span>
        {/*
         * first star
         * now define icon element and set className as expession to check
         * if rating >= 1 include font awesome with star icon - 'fas fa-star'
         * if rating >= 0.5 show half star - 'fas fa-star-half-alt'
         * else if rating is 0 show empty star - 'far fa-star'
         * now we need to import font awesome component to use star icom
         */}
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        {/*
         * second star
         * now define icon element and set className as expession to check
         * if rating >= 2 include font awesome with star icon - 'fas fa-star'
         * if rating >= 1.5 show half star - 'fas fa-star-half-alt'
         * else if rating is 0 show empty star - 'far fa-star'
         * now we need to import font awesome component to use star icom
         */}
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        {/*
         * third star
         * now define icon element and set className as expession to check
         * if rating >= 3 include font awesome with star icon - 'fas fa-star'
         * if rating >= 2.5 show half star - 'fas fa-star-half-alt'
         * else if rating is 0 show empty star - 'far fa-star'
         * now we need to import font awesome component to use star icom
         */}
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        {/*
         * fourth star
         * now define icon element and set className as expession to check
         * if rating >= 4 include font awesome with star icon - 'fas fa-star'
         * if rating >= 3.5 show half star - 'fas fa-star-half-alt'
         * else if rating is 0 show empty star - 'far fa-star'
         * now we need to import font awesome component to use star icom
         */}
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        {/*
         * fifth star
         * now define icon element and set className as expession to check
         * if rating >= 5 include font awesome with star icon - 'fas fa-star'
         * if rating >= 4.5 show half star - 'fas fa-star-half-alt'
         * else if rating is 0 show empty star - 'far fa-star'
         * now we need to import font awesome component to use star icom
         */}
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span> {numReviews} reviews</span> {/** Showing the reviews */}
    </div>
  );
}

export default Rating;

// goto index.html to import font-awesome just before title
