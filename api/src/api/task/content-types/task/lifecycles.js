module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    data.slug =
      data.title && data.title.trim().toLowerCase().replace(/ /gi, "-");
  },
};
