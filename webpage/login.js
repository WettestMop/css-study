var backgroundimg = "";
    $.get("https://api.nasa.gov/planetary/apod?api_key=dqcXPlIxNMY8BICLeXlLxaXtSRKmrdnnN8ocOxRj",function(data) {
      backgroundimg = JSON.parse(data)
  });
console.log(backgroundimg)