// DataTables
jQuery(document).ready(function () {
    jQuery('.igsv-table:not(.no-datatables)').each(function () {
        var dt_opts = {
            'dom': 'TC<"clear">lfrtip',
            'scrollX': true,
            'responsive': true,
            'tableTools': {
                'sSwfPath': '//datatables.net/release-datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf'
            }
        };
        var table = jQuery(this);
        if (table.hasClass('no-responsive')) {
            delete dt_opts.responsive;
        }
        table.DataTable(dt_opts);

        var x;
        if (jQuery(this).is('.FixedColumns')) {
            new jQuery.fn.dataTable.FixedColumns(table);
        } else if (x = this.className.match(/FixedColumns-(left|right)-([0-9])*/g)) {
            var l_n = 0;
            var r_n = 0;
            for (var i = 0; i < x.length; i++) {
                var z = x[i].split('-');
                if ('left' === z[1]) {
                    l_n = z[2];
                } else {
                    r_n = z[2];
                }
            }
            new jQuery.fn.dataTable.FixedColumns(table, {
                'leftColumns': l_n,
                'rightColumns': r_n
            });
        }
    });
});
