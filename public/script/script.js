//==============================================
//                  DASHBORD
//==============================================


//==============================================
//     jQuery element shortcut
//==============================================
/*
        GROUP WIDGET
 */
var $dash_group_widget                  = "#dashboard_group_widget",
    $dash_group_widget_group_list       = $dash_group_widget + " ul";


/*
         DASHBORD INIT
 */
$(document).ready(function(){
    h_ajax.getGroups()
        .then(function(response){
        //emptying he list
        h_dom.emptyHtmlContentForElement($dash_group_widget_group_list);

        //Looping through data received and adding li and link for each element
        if(response.data && response.data.length > 0) {
            //Showing the list of group found in the widget
            response.data.forEach(function (group) {
                var liElement = $("<li>").append(
                    $("<a>", {
                        href: h_url.getUrlSingleGroup(group._id),
                        text: group.name
                    })
                );
                $($dash_group_widget_group_list).append(liElement);
            });
        }else {
            //Showing the "No group" list element
            $($dash_group_widget_group_list).append(
                $("<li>").text("Aucun groupe...")
            );
        }
    }).catch(function(response){
        //TODO
        h_error.handleError(response);
    });
});

//==============================================
//               GROUP PAGE
//==============================================
/*
    SONGS WIDGET
 */
var $songs_widget                  = "#group_songs",
    $songs_widget_songs_list       = $songs_widget + " ul";

$(document).ready(function(){
    //Get the id of the current group
    var groupId = h_dom.getDataGroup();
    //emptying the songs widget
    h_dom.emptyHtmlContentForElement($songs_widget_songs_list);
    //Feeding the song list
    h_ajax.getSongsForGroup(groupId)
        .then(function(response){
            //Feeding the group-songs list
            if(response.data && response.data.length > 0){
                response.data.forEach(function(song){
                   $($songs_widget_songs_list).append(
                       $("<li>", {
                           text: song.title + " - "
                       }).append(
                           $("<span>", {
                               text: song.group
                           })
                       )
                   );
                });
            }else{
                $($songs_widget_songs_list).append(
                    $("<li>").text("Aucun titre")
                );
            }
        })
        .catch(function(response){
            console.log(response.message); //TODO
        })
});