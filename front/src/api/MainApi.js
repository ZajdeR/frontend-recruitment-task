import Vue from 'vue';

export default {
  fetchCountries() {
    return Vue.axios.get('/internal/courier-u/initialize');
  },
  fetchOperators(receiverCountry, senderCountry, weight, sizeL, sizeD, sizeW) {
    const query = new URLSearchParams({
      receiverCountry,
      senderCountry,
      weight,
      sizeL,
      sizeD,
      sizeW
    });

    return Vue.axios.get(`/internal/courier-u/operators?${query.toString()}`);
  },
  fetchOperatorPrices(operatorId, receiverCountry, senderCountry, weight, sizeL, sizeD, sizeW, receiverZip, packageType) {
    const query = new URLSearchParams({
      operatorId,
      receiverCountry,
      senderCountry,
      weight,
      sizeL,
      sizeD,
      sizeW,
      receiverZip,
      packageType
    });

    return Vue.axios.get(`/internal/courier-u/prices/operators?${query.toString()}`);
  }
};
