const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name: name,
      });

      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");

      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // this will also work but it will not return the updated object

      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      // return city;

      // if you want the updated objects then you can use the below approach

      const city = await City.findByPk(cityId);

      city.name = data.name;

      await city.save();

      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");

      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      console.log("something went wrong in the repository layer");

      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = City.findByPk(cityId);

      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");

      throw { error };
    }
  }
}

module.exports = CityRepository;
