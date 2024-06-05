        $(document).ready(function() {
            $('#sidebarToggle').click(function() {
                $('.sidebar').toggleClass('collapsed');
                $('.content').toggleClass('collapsed');
            });

            $('.sidebar-menu li a').click(function() {
                $(this).next('.submenu').slideToggle();
                $(this).find('.fa-chevron-down').toggleClass('rotate');
            });
        });
