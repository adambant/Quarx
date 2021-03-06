if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.imagemanager = function()
{
    return {
        init: function()
        {
            if (!this.opts.imageManagerJson) return;

            this.modal.addCallback('image', this.imagemanager.load);
        },
        load: function()
        {
            var $modal = this.modal.getModal();

            this.modal.createTabber($modal);

            $('#redactor-modal-image-droparea').hide()

            var $box = $('<div id="redactor-image-manager-box" style="overflow: auto; height: 300px;" class="redactor-tab redactor-tab2">').hide();
            $modal.append($box);

            $("#redactor-image-manager-box, #imagemanager-filter").show();

            $.ajax({
                dataType: "json",
                cache: false,
                headers: {
                    Quarx: _apiKey,
                    Authorization: 'Bearer '+_apiToken
                },
                url: this.opts.imageManagerJson,
                success: $.proxy(function(data)
                {
                    $.each(data.data, $.proxy(function(key, val)
                    {
                        // title
                        var thumbtitle = '';
                        if (typeof val.title_tag != 'undefined') thumbtitle = val.title_tag;

                        var img = $('<div class="raw25 pull-left thumbnail-box"><img class="img-responsive" data-img-name="'+ val.url +'" src="' + val.url + '" rel="' + val.url + '" title="' + thumbtitle + '" style="cursor: pointer;" /></div>');
                        $('#redactor-image-manager-box').append(img);
                        $(img).click($.proxy(this.imagemanager.insert, this));

                    }, this));

                    $("#imagemanager-filter").bind("keyup", function(){
                        $("#redactor-image-manager-box").find("img").each(function(){
                            if ($(this).attr("data-img-name").indexOf($("#imagemanager-filter").val()) < 0) {
                                $(this).hide();
                            } else {
                                $(this).show();
                            }
                        });
                    })

                }, this)
            });
        },
        insert: function(e)
        {
            console.log(e.target)
            this.image.insert('<img src="' + $(e.target).attr('rel') + '" alt="' + $(e.target).attr('title') + '" title="' + $(e.target).attr('title') + '">');
        }
    };
};