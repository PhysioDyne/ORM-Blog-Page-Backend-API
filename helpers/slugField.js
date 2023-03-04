module.exports = (url) => {
  url = url.toLowerCase();
  url = url.replace("ü", "u");
  url = url.replace("ı", "i");
  url = url.replace("ğ", "g");
  url = url.replace("ö", "o");
  url = url.replace("ç", "c");
  url = url.replace("ş", "s");
  url = url.replace(" ", "-");
  return url;
};
