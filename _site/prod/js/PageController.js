/**
 * Created by margaretasandor on 29/07/2018.
 */

var data = {
    profile: {
        name: "Edward Couzens",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    biography: {
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh nisi, faucibus ut ullamcorper eget, blandit sit amet odio. Suspendisse venenatis felis ac nulla tincidunt euismod. Vivamus imperdiet tincidunt quam, in aliquet purus efficitur quis. Ut lacinia tincidunt ultricies. Nulla auctor, nisl at fringilla semper, orci ex maximus lacus, ut ultrices erat sapien eu erat. In hac habitasse platea dictumst. Donec rutrum congue augue, quis mattis nunc. Suspendisse potenti. Nullam luctus sollicitudin lobortis. Aenean fringilla ullamcorper feugiat. In hac habitasse platea dictumst.",
        info: "There where a number of different groups in the film which where involved. Alongside the corporate team we also had extensive involvement for our colleagues in Financing, Tax,  Pensions and Employment"
    },
    event: {
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius consectetur ultrices. Phasellus mattis iaculis vulputate. Morbi ut pulvinar ligula, pharetra dictum lorem. Nam pretium sapien eleifend, interdum orci vitae, blandit velit. Curabitur viverra augue eu enim iaculis, gravida vestibulum ante tempus. Duis bibendum velit ac risus aliquam placerat. Suspendisse elit quam, eleifend ut molestie vel, ultricies in sem. Mauris elementum metus vel augue hendrerit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh nisi, faucibus ut ullamcorper eget, blandit sit amet odio. Suspendisse venenatis felis ac nulla tincidunt euismod. <br/><br/> Aenean fringilla ullamcorper feugiat. Vestibulum in augue luctus nisi pellentesque lobortis eget id dui. Suspendisse potenti. Vivamus iaculis luctus ante a molestie. Duis tellus neque, tempus in tristique ut, fermentum eget dolor.",
        seats: "4",
        location: "Nullam luctus sollicitudin lobortis. Aenean fringilla ullamcorper feugiat. Vestibulum  in augue luctus nisi pellentesque lobortis eget id dui."
    },
    slides: [
        {
            id: "01",
            active: true,
            data: "<img src=\"assets/img/slide-1.jpg\">",
            capture: {
                title: "01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                description: "01 - Aenean fringilla ullamcorper feugiat. Vestibulum in augue luctus nisi pellentesque lobortis eget id dui. Suspendisse potenti. Vivamus iaculis luctus ante a molestie."
            }

        },
        {
            id: "02",
            active: false,
            data: "<img src=\"assets/img/slide-2.jpg\">",
            capture: {
                title: "02 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "02 - Aenean fringilla ullamcorper feugiat. Vestibulum in augue luctus nisi pellentesque lobortis eget id dui. Suspendisse potenti. Vivamus iaculis luctus ante a molestie."
            }

        },
        {
            id: "03",
            active: false,
            data: "<img src=\"assets/img/slide-3.jpg\">",
            capture: {
                title: "03 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "03 - Aenean fringilla ullamcorper feugiat. Vestibulum in augue luctus nisi pellentesque lobortis eget id dui. Suspendisse potenti. Vivamus iaculis luctus ante a molestie."
            }

        }
    ]

};
var d = {
    slides: 'test'
};

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
