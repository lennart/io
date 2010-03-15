function(doc, req) {
  // !json io
  // !json templates.notfound
  // !code vendor/mustache.js/mustache.js

  if(!doc) {
    return Mustache.to_html(templates.notfound, io)
  }

  return {
    code: 302,
    headers: {"Location": doc.target},
    body: "If you don't get redirected, please go to " + doc.target + "\n"
  };
}
