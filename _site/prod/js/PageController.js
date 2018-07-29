/**
 * Created by margaretasandor on 29/07/2018.
 */

function loadJSON(path, success, error)  {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

loadJSON('./i18n/data.json',
    function(data) {
        console.log(data);
        var data = data;
        var controller = {
            play: function() {
                console.log (this);
                this.style.display = "none";
                var video = document.querySelector('#video');
                video.play();

            },
            next: function(e, model) {
                var cs = model.controller.getCurrentSlide(model.data.slides);

                if(cs+1<model.data.slides.length){
                    model.controller.disableSlides(model.data.slides);
                    model.data.slides[cs+1]['active']= true;
                }


            },
            prev: function(e, model) {
                console.log ('prev');
                var cs = model.controller.getCurrentSlide(model.data.slides);

                if(cs-1>-1){
                    model.controller.disableSlides(model.data.slides);
                    model.data.slides[cs-1]['active']= true;
                }
            },

            // Used in JS
            getCurrentSlide: function (s) {
                var ix = false;
                for(var i=0; i < s.length; i++) {
                    if (s[i]['active'] == true) {
                        ix = i;
                        break;
                    }
                }
                return ix;
            },
            disableSlides: function(s) {
                for(var i=0; i < s.length; i++) {
                    (s[i]['active'])? s[i]['active'] = false: '';
                }
            }
        };

        rivets.bind(document.querySelector('#profile'), {
            data: data,
            controller: controller
        });
    },
    function(xhr) { console.error(xhr); }
);
