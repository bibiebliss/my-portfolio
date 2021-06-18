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

 $(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        var top_of_element = $(".chart-wrapper").offset().top;
        var bottom_of_element = $(".chart-wrapper").offset().top + $(".chart-wrapper").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            $('.chart-wrapper').addClass("in-view");
        } else {
            // the element is not visible, do something else
            $('.chart-wrapper').removeClass("in-view");
        }
    })
    //for the menubar
    $('.menu-bar').click(function () {
        $('.navbar .links').toggleClass("active");
        $('.menu-bar i').toggleClass("active");
    })
    //for the project links
    $('.chart-wrapper').click(function () {
        $('.chart-wrapper').addClass("in-view");

    })
    $("#gh").on('click', function (event) {
        event.preventDefault();
        window.open("https://github.com/bibiebliss?tab=repositories", "_blank");
    })
    $("#cp").on('click', function (event) {
        event.preventDefault();
        window.open("https://codepen.io/bibiebliss", "_blank");
    })
});



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Animal');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Research', 30],
          ['Tutoring', 50],
          ['Technical', 20]
        ]);

  const options = {
    'title': 'Experience Chart',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}

async function showContent() {
    const response = await fetch("/hello");
    const responseText = await response.json();
    console.log(responseText);
    const choice = responseText[Math.floor(Math.random() * responseText.length)];

    const responseCont = document.getElementById("response-container");
    responseCont.innerText = choice;
}