
var testmodel = {
  nid: 123, // init values
  body: 'Lorem Ipsum',
  image_url: '/app/images/default_image.jpg'
};

mergeApp.run(function ($http) {
  /*
  $http.get("http://merge.localhost/node/1?_format=json").success(function (data) {
    //console.log(data);
    testmodel.nid = data.nid[0].value;
    testmodel.body = data.body[0].value;
    testmodel.image_url = data.field_image[0].url;
  });
  */
});
