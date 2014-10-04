unless @headmade
  @headmade = {}

class @headmade.Headmade
  constructor: (headmade)->

    console.log(123)

    # paper = Raphael("wrapper", "100%", "100%").setViewBox(0, 0, 1200, 1145, true)
    paper = SVG("head").size("100%","100%").viewbox(0, 0, 1200, 1145)


    for crumb in headmade.dots.head
      paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )


    for crumb in headmade.dots.crumbs
      paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )





new @headmade.Headmade(@headmade)