onload=function(){
        document.forms[0].mundial.disabled=true;
    }
        $(document).ready(function()
        {
            $("input[name=check]").prop("checked", false);
            $("input[name=check]").click(function () {
            if($(this).val() == 1)
            {
                document.forms[0].mundial.disabled=false;
            }
        });
    $("#mundial").click(function() {
            $("input[name=check]").prop("checked", false);
            }
        );
    });
