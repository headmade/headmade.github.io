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

#    @crumbs_translate  = @getTranslate()
    move_crambX = []
    move_crambY = []
    g_crumbs    = head.group()
    s_crumbs    = paper.set()
    for crumb, i in headmade.dots.crumbs
      polygon = paper.polygon(crumb.d).attr(fill: crumb.fill, "stroke-width": 0)
      
      g_crumbs.add polygon
      s_crumbs.add polygon
      
      crambs_start  = _.compact(crumb.d.split(/[^\d\.]/)).map (item)=>
        parseFloat(item, 10)
      crambs_end    = _.compact(headmade.dots.crumbs_broken[i].d.split(/[^\d\.]/)).map (item)=>
        parseFloat(item, 10)
      move_crambX[i] = [(~~crambs_end[0] - (~~crambs_start[0])) + "px"]
      move_crambY[i] = [(~~crambs_end[1] - (~~crambs_start[1])) + "px"]
      console.log (move_crambX[i])

    

    $("#head").on "click", ()=>
      console.log ("I was born!")
      s_crumbs.each (i)=>
        crumb   = s_crumbs.get(i)
        crumb.addClass "transition" 
        console.log 
        (crumb).attr 'style', "-webkit-transform: translate(#{move_crambX[i]}, #{move_crambY[i]})" 
#        console.log(headmade.dots.crumbs_broken[i].d.split(/[^\d\.]/))
#        crumb   = s_crumbs.get(i)
#        crumb.animate(1000)
#        # .plot headmade.dots.crumbs_broken[i].d
#        .cx @crumbs_translate[i][0]
#        .cy @crumbs_translate[i][1]

#        # .transform

  
#  getTranslate: =>
#    move = []
#    for crumb, i in headmade.dots.crumbs
#      crambs_start  = _.compact(crumb.d.split(/[^\d\.]/)).map (item)=>
#        parseFloat(item, 10)
#      crambs_end    = _.compact(headmade.dots.crumbs_broken[i].d.split(/[^\d\.]/)).map (item)=>
#        parseFloat(item, 10)

#      move_cramb    = [ (crambs_end[0] + crambs_end[2] + crambs_end[4])/3 , (crambs_end[1] + crambs_end[3] + crambs_end[5])/3 ]
#      move
#    move


new @headmade.Headmade(@headmade)