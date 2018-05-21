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

function plataformaEs() {
    if (navigator.platform == "iPhone" || navigator.platform == "iPad") {
        alert(navigator.platform);
						
    } else {
        if (navigator.userAgent.match(/Android/i)) {
				$("#linkestilo").attr("href", "css/style.css")
							}
        } else {
            alert(navigator.platform + " mira la consola");
            //console.log(navigator);
							 
        }
    }
}
