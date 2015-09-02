package org.foodieMap.app

import org.scalatra._
import scalate.ScalateSupport

class FoodieMapController extends FoodiemapStack {

  get("/") {
    val mapBoxAccessToken = System.getenv("mapBoxAccessToken")

    contentType = "text/html"
    layoutTemplate("/WEB-INF/templates/views/index.jade", "obj" -> Map("mapBoxAccessToken" -> mapBoxAccessToken))
  }
}
