 $(document).ready(function(){
    $(".button-collapse").sideNav({
        'edge': 'left',
        closeOnClick: false, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
});