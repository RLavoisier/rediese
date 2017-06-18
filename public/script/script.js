//==============================================
//                  DASHBORD
//==============================================

/*
          jQuery element shortcut
 */
/*
        GROUP WIDGET
 */
var $dash_group_widget                  = "#dashboard_group_widget",
    $dash_group_widget_group_list       = $dash_group_widget + " ul";


/*
         DASHBORD INIT
 */
$(document).ready(function(){
    h_ajax.getGroups(function(groups){
        //emptying he list
        h_dom.emptyHtmlContentForElement($dash_group_widget_group_list);
        if(groups.data && groups.data.length > 0) {
            //Showing the list of group found in the widget
            groups.data.forEach(function (group) {
                $(this.$dash_group_widget_group_list).append(
                    $("<li>")
                        .append(
                            $("<a>")
                                .attr("href", h_ajax.getUrlSingleGroup(group._id))
                                .text(group.name)
                        )
                );
            });
        }else {
            //Showing the "No group" list element
            $(this.$dash_group_widget_group_list).append(
                $("<li>").text("Aucun groupe")
            );
        }
    });
});