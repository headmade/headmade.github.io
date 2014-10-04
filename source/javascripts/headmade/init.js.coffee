unless @headmade
  @headmade = {}

class @headmade.Headmade
  constructor: (headmade)->

    console.log(123)

    paper = Raphael("wrapper", "100%", "100%").setViewBox(0, 0, 1200, 1145, true)


    for crumb in headmade.dots.head
      paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )


    for crumb in headmade.dots.crumbs
      paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )

    for crumb in headmade.dots.crumbs_broken
      paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )

    # paper.ellipse(959.985, 765.112, 150, 15)
    # .attr
    #   fill: 'r(0.5, 0.5)#d1d1d1-#ffffff'
    #   opacity: 0.5
    #   "stroke-width": 0



new @headmade.Headmade(@headmade)