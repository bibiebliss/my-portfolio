// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

$(document).ready(function() {
    $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        })
        //for the menubar
    $('.menu-bar').click(function() {
            $('.navbar .links').toggleClass("active");
            $('.menu-bar i').toggleClass("active");
        })
        //for the project links
    $('.chart-wrapper').click(function() {
        $('.chart-wrapper').addClass("in-view");

    })
    $("#gh").on('click', function(event) {
        event.preventDefault();
        window.open("https://github.com/bibiebliss?tab=repositories", "_blank");
    })
    $("#cp").on('click', function(event) {
        event.preventDefault();
        window.open("https://codepen.io/bibiebliss", "_blank");
    })
});



function addRandomGreeting() {
    const greetings = ['Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', 'There’s a lot of beauty in ordinary things. Isn’t that kind of the point?', 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.', 'I guess I’ve been working so hard, I forgot what it’s like to be hardly working.', 'I am Beyonce, always.'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}