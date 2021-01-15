import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = '1mUoBAd-ty94ii7onOrRUpkYiA5ZRi2lJrl4qflMv0ZgdYiDdw4Lb3SgmJdEeoSe4dB1uBA2L_nt0X_m7eSUQf5xVBJKrocNDof9g6R2fHLupZ4LV4jk3Jdk1h8BYHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        });
      }
    })
  }


}
export default Yelp;
