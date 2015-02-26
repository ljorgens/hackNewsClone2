hackNewsClone.factory('ArticleFactory', function ArticleFactory(){
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    factory.articles.push({ name: factory.articleName, link: factory.articleLink, id: factory.articles.length + 1, comments: [], count: 0 });
    factory.articleName = null;
    factory.articleLink = null;
  };

  return factory;
});