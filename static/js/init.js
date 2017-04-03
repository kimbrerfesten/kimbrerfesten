 $(document).ready(function(){
    $(".button-collapse").sideNav({
        menuWidth: 200, // Default is 300
        'edge': 'left',
        closeOnClick: false, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.materialboxed').materialbox();
    $('.slider').slider({
    
    });
});