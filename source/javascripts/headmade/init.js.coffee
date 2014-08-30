unless @headmade
  @headmade = {}

paper = Raphael(0, 0, "100%", "100%").setViewBox(0, 0, 1920, 1080, true)


for crumb in @headmade.crumbs
  paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, )
