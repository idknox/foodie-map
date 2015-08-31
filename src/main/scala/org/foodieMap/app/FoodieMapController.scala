package org.foodieMap.app

import org.scalatra._
import scalate.ScalateSupport

class FoodieMapController extends FoodiemapStack {

  get("/") {
    contentType = "text/html"
    layoutTemplate("/WEB-INF/templates/views/hello-scalate.jade", "layout" -> "default.jade", "obj" -> Map(1 -> "This is", 2 -> "a test", 3 -> "app."))
  }
}
