unless @headmade
  @headmade = {}

class @headmade.Headmade

  constructor: (headmade)->

    console.log(123)

    # paper = Raphael("head", "100%", "100%").setViewBox(0, 0, 1200, 1145, true)
    paper = SVG("head").size("100%","100%").viewbox(0, 0, 1200, 1145)

    head = paper.group()
    # .addClass "svg-head"

    for crumb in headmade.dots.head
      path = paper.path(crumb.d).attr(fill: crumb.fill, "stroke-width": 0, "fill-rule": "evenodd" )
      head.add path


    @crumbs_translate  = @getTranslate()

    g_crumbs    = head.group()
    s_crumbs    = paper.set()

    for crumb, i in headmade.dots.crumbs
      polygon = paper.polygon(crumb.d).attr(fill: crumb.fill, "stroke-width": 0)

      g_crumbs.add polygon
      s_crumbs.add polygon

      # console.log _.compact(crumb.d.split(/[^\d\.]/)) 



    $("#head").on "click", ()=>


      s_crumbs.each (i)=>
        crumb   = s_crumbs.get(i)

        crumb.animate(1000)
        # .plot headmade.dots.crumbs_broken[i].d
        .cx @crumbs_translate[i][0]
        .cy @crumbs_translate[i][1]

        # .transform

  
  getTranslate: =>
    move = []
    for crumb, i in headmade.dots.crumbs
      crambs_start  = _.compact(crumb.d.split(/[^\d\.]/)).map (item)=>
        parseFloat(item, 10)
      crambs_end    = _.compact(headmade.dots.crumbs_broken[i].d.split(/[^\d\.]/)).map (item)=>
        parseFloat(item, 10)

      move_cramb    = [ (crambs_end[0] + crambs_end[2] + crambs_end[4])/3 , (crambs_end[1] + crambs_end[3] + crambs_end[5])/3 ]
      move.push move_cramb

    move


new @headmade.Headmade(@headmade)