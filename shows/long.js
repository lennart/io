function(doc, req) {
  //json io
  //
  if(!doc) {
    return template(templates.404, {
      twitter: io.twitter 
    })
  }

  return {
    code: 302,
    headers: {"Location": doc.target},
    body: "If you don't get redirected, please go to " + doc.target + "\n"
  };
}
