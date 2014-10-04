unless @headmade
  @headmade = {}

class @headmade.Headmade
  constructor: (headmade)->

    console.log(123)

    # paper = Raphael("head", "100%", "100%").setViewBox(0, 0, 1200, 1145, true)
    paper = SVG("head").size("100%","100%").viewbox(0, 0, 1200, 1145)

    head = paper.group().addClass "svg-head"

    for crumb in headmade.dots.head
      path = paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, "fill-rule": "evenodd" )
      head.add path


    crumbs = head.group()

    for crumb in headmade.dots.crumbs
      path = paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )
      crumbs.add path

    # for crumb, i in crumbs
    #   crumb.animate(path: headmade.dots.crumbs_broken[i].d, 1000, "linear")




new @headmade.Headmade(@headmade)