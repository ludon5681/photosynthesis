
var first = true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function scene1() {
    $(".block-right").empty();
    $("#frame").empty()
    
    if (!first) {
        $("#frame").append("<img class='obj' id='titlecard' src='assets/titlecard.png' style='z-index: 1; opacity: 0;' />");
        $("#frame").append("<img id='s1-continue' src='assets/start.jpg' class='obj continue' style='z-index: 2; opacity: 0;' />");
        anime({
            targets: ".obj",
            opacity: "100%",
            easing: "easeInOutQuad",
            duration: 400,
        })
    } else {
        $("#frame").append("<img class='obj' id='titlecard' src='assets/titlecard.png' style='z-index: 1;' />");
        $("#frame").append("<img id='s1-continue' src='assets/start.jpg' class='obj continue' style='z-index: 2;' />");
    }
    first = false;
    
    $(".continue").on({
        mouseenter: function() {
            anime({
                targets: '.continue',
                scale: '1.035',
                easing: 'easeInOutQuad',
                duration: 200
            })
        },
        mouseleave: function() {
            anime({
                targets: '.continue',
                scale: '1',
                easing: 'easeInOutQuad',
                duration: 200
            })
        },
        click: function() {
            $(".continue").off();
            anime({
                targets: '.continue',
                opacity: '0',
                easing: 'easeInOutQuad',
                duration: 400
            })
            scene2_1();
        }
    })
}
function fadeout() {
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene1
    })
}

function scene2_1() {
    // load initial scene objects and start scene
    $(".block-right").append("<div class='sidebar'><p>Hi there! Over the course of this &#x2728 adventure &#x2728, text will appear here to walk you through what's going on on the screen.<br><br>Sometimes, buttons will appear on this panel, like this:</p><button id='next'>Next</button></div>");
    $("#next").on("click", function() { $(".block-right").empty(); $(".block-right").append("<div class='sidebar'><p>Sometimes, they'll also appear in the rectangle, like you've seen.</p><button id='continue' onclick='scene2_2()'>Continue</button></div>"); $("#next").off(); }); 
}
function scene2_2() {
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene2_3
    })
}
function scene2_3() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>Plants are all around us. We eat many of them in our diets, and ultimately nearly all the energy that humans use to live came, at one point, from a plant, generating that energy using the light of the sun. But how do plants do that?</p><button id='next' onclick='scene2_4()'>Next</button></div>");
}
function scene2_4() {
    $(".block-right").empty();
    $("#frame").empty();
    $(".block-right").append("<div class='sidebar'><p>To figure out the answer to that question, let's take a journey through the process of photosynthesis using this happy little carrot plant as an example! We'll call him Jared.</p><button id='next' onclick='scene2_5()'>Next</button></div>");
    $("#frame").append("<img style='opacity: 0;' id='carrot' src='assets/carrot.png' />");
    anime({
        targets: "#carrot",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
    })
}
function scene2_5() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>To make sugars, which store the energy produced through photosynthesis, Jared needs a few materials. These are:</p><ul><li>water;</li><li>carbon dioxide;</li><li>and light energy (photons).</li></ul><button id='next' onclick='scene2_6()'>Next</button></div>");
}
function scene2_6() {
    $(".block-right").empty();
    $(".frame").prepend("<img class='obj' id='water' src='assets/water_1.jpg' style='top: 280px; left: 160px; z-index: 2; opacity: 0;' />");
    $(".block-right").append("<div class='sidebar'><p>He'll pull the water out of the soil through his roots, which will travel up the plant's xylem - a network of tubes that traverse the plant and carry water and mineral salts from the roots to the leaves of the plant.</p><button id='next' onclick='scene2_7()'>Next</button></div>");
    anime({
        targets: '#water',
        opacity: "100%",
        easing: 'easeInOutQuad',
        duration: 300
    });
}
function scene2_7() {
    $(".block-right").empty();
    $(".frame").prepend("<img class='obj' id='co2' src='assets/co2_1.png' style='top: 70px; left: 80px; z-index: 2; opacity: 0;' />");
    $(".block-right").append("<div class='sidebar'><p>He gets the carbon dioxide that he needs from the atmosphere. Because it's a small, nonpolar molecule, it can diffuse through his leaves. More on that later.</p><button id='next' onclick='scene2_8()'>Next</button></div>");
    anime({
        targets: '#co2',
        opacity: "100%",
        easing: 'easeInOutQuad',
        duration: 300
    });
}
function scene2_8() {
    $(".block-right").empty();
    $(".frame").prepend("<img class='obj' id='light' src='assets/light_1.jpg' style='top: 25px; left: 370px; z-index: 2; opacity: 0;' />");
    $(".block-right").append("<div class='sidebar'><p>For most plants (those growing without human intervention), light comes from the sun. The light that hits Jared's leaves will be absorbed by pigments in his chloroplasts and will be used to power the process of photosynthesis. More on that later, as well.</p><button id='next' onclick='scene2_9()'>Next</button></div>");
    anime({
        targets: '#light',
        opacity: "100%",
        easing: 'easeInOutQuad',
        duration: 300
    });
}
function scene2_9() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>Let's zoom in on the plant's leaves, to take a close look at these how all this happens.</p><button id='continue' onclick='scene3_1()'>Continue</button></div>");
}

function scene3_1() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene3_2
    })
}
function scene3_2() {
    $("#frame").empty();
    $("#frame").append("<img id='leaf' style='opacity: 0;' src='assets/leaf-diagram_1.png' />");
    anime({
        targets: "#leaf",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
        complete: scene3_3
    })
}
function scene3_3() {
    $(".block-right").append("<div class='sidebar'><p>This is a close up of one of Jared's leaves. Leaves are the primary site of photosynthesis in most plants, but many other parts of plants are sometimes capable of performing photosynthesis, including:</p><ul><li>stems;</li><li>flowers;</li><li>fruit;</li><li>and seeds.</li></ul><p>However, leaves are specialized organs designed to perform photosynthesis as efficiently as possible, unlike other plant tissues, which have other important functions.</p><button id='next' onclick='scene3_4()'>Next</button></div>");
}
function scene3_4() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_2.png' />");
    $(".block-right").append("<div class='sidebar'><p>At the top of most leaves is the waxy cuticle, a protective, wax-like covering that is composed primarily of cutin and cutan, which are modified fatty acids. The primary functions of the waxy cuticle are to prevent water loss and physical damage to the leaf.</p><button id='next' onclick='scene3_5()'>Next</button></div>");
}
function scene3_5() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_3.png' />");
    $(".block-right").append("<div class='sidebar'><p>Below the waxy cuticle is the leaf's upper epidermis, a layer of flattened, tightly packed cells that provide structural support to the cell and help to control water loss through stomata (though stomata are more common on the lower epidermis). It is usually only one cell thick, though in very hot or very cold conditions it may be thicker. </p><button id='next' onclick='scene3_6()'>Next</button></div>");
}
function scene3_6() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_4.png' />");
    $(".block-right").append("<div class='sidebar'><p>Just under the upper epidermis is one, two, or three layers of palisade mesophyll cells, which are elongated, rod-shaped cells that serve as the primary site of photosynthesis in plants that contain them due to their very large number of chloroplasts.</p><button id='next' onclick='scene3_7()'>Next</button></div>");
}
function scene3_7() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_5.png' />");
    $(".block-right").append("<div class='sidebar'><p>Under the palisade mesophyll cells are spongy mesophyll cells. These cells are more loosely packed than palisade mesophyll cells in order to allow for more efficient gas exchange.</p><button id='next' onclick='scene3_8()'>Next</button></div>");
}
function scene3_8() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_6.png' />");
    $(".block-right").append("<div class='sidebar'><p>Guard cells make up the cell's stomata, and are thus crucial to regulating gas exchange and water loss to the atmosphere. They are the only cells on the surface of the leaf that contain chloroplasts.</p><button id='next' onclick='scene3_9()'>Next</button></div>");
}
function scene3_9() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/leaf-diagram_7.png' />");
    $(".block-right").append("<div class='sidebar'><p>Stomata (singular stoma) are small pores in a plant's epidermis that are made up of two guard cells. They can open and close, allowing or denying the free flow of gases between the atmosphere and the inside of the leaf. This is used to minimize water loss and facilitate the entry of carbon dioxide and removal of oxygen from the leaf. Click on a stoma to see it up close!</p></div>");
    $("#frame").append("<div class='obj hitbox' style='height: 23px; width: 23px; top: 313px; left: 185px; z-index: 3;' onclick='closeStoma()'></div>")
    $("#frame").append("<div class='obj hitbox' style='height: 23px; width: 23px; top: 310px; left: 375px; z-index: 3;' onclick=closeStoma()></div>")
}

// allow user to open and close the stoma image; place a continue button on the screen
var visited = 0;
function openStoma() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene4_2
    })
}
function scene4_2() {
    visited++;
    $("#frame").empty();
    if (visited >= 2) {
        $("#frame").append("<img class='obj' style='top: 320px; left: 460px; opacity: 0; z-index: 4;' id='continue' class='continue' src='assets/continue.jpg' />");
        anime({
            targets: '#continue',
            opacity: '100%',
            easing: 'easeInOutQuad',
            duration: 400,
            complete: addContinueEventListeners
        })
    }
    $(".block-right").append("<div class='sidebar'><p>When the stoma is open, the leaf is accepting air from the atmosphere, allowing carbon dioxide to flow in and oxygen to flow out of the leaf easily. The plant has to be careful, though! This also makes it easier for water vapor to leave the leaf, losing the plant valuable water.<br><br>Click on the stoma again to close it!</p></div>");
    $("#frame").append("<img class='obj' style='top: 0; left: 0; opacity: 0;' id='open-stoma' src='assets/open-stoma.png' onclick='closeStoma()' />");
    anime({
        targets: '#open-stoma',
        opacity: '100%',
        easing: 'easeInOutQuad',
        duration: 400
    })
}
function closeStoma() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene4_3
    })
}
function scene4_3() {
    visited++;
    $("#frame").empty();
    if (visited >= 2) {
        $("#frame").append("<img class='obj' style='top: 320px; left: 460px; opacity: 0; z-index: 4;' id='continue' class='continue' src='assets/continue.jpg' />");
        anime({
            targets: '#continue',
            opacity: '100%',
            easing: 'easeInOutQuad',
            duration: 400,
            complete: addContinueEventListeners
        })
    }
    $(".block-right").append("<div class='sidebar'><p>When the stoma is closed, the leaf has one less openings to the atmosphere, which makes it more difficult for it to take in carbon dioxide and release oxygen. However, this also helps to preserve water, especially when temperatures are very warm.<br><br>Click on the stoma again to open it!</p></div>");
    $("#frame").append("<img class='obj' style='top: 0; left: 0; opacity: 0;' id='close-stoma' src='assets/close-stoma.png' onclick='openStoma()' />");
    anime({
        targets: '#close-stoma',
        opacity: '100%',
        easing: 'easeInOutQuad',
        duration: 400
    })
}
function addContinueEventListeners() {
    $("#continue").on({
        mouseenter: function() {
            anime({
                targets: '#continue',
                scale: '1.035',
                easing: 'easeInOutQuad',
                duration: 200
            })
        },
        mouseleave: function() {
            anime({
                targets: '#continue',
                scale: '1',
                easing: 'easeInOutQuad',
                duration: 200
            })
        },
        click: function() {
            $("#continue").off();
            scene5_1();
        }
    })
    return;
}

function scene5_1() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene5_2
    })
}
function scene5_2() {
    $("#frame").empty();
    $("#frame").append("<img id='chloroplast' style='opacity: 0;' src='assets/chloroplast_1.png' />");
    anime({
        targets: "#chloroplast",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
        complete: scene5_3
    })
}
function scene5_3() {
    $(".block-right").append("<div class='sidebar'><p>Inside of nearly all plant cells (including all green ones) are chloroplasts. These are the organelles in which photosynthesis is actually performed, and the cell has a massive number of them, especially in its leaves.</p><button id='next' onclick='scene5_4()'>Next</button></div>");
}
function scene5_4() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_3.png' />");
    $(".block-right").append("<div class='sidebar'><p>The chloroplast is enclosed in an outer membrane, which is very similar to a cell membrane. Beneath the inner membrane is the outer membrane, which encloses the chloroplast's stroma.</p><button id='next' onclick='scene5_5()'>Next</button></div>");
}
function scene5_5() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_4.png' />");
    $(".block-right").append("<div class='sidebar'><p>The thylakoid membrane encloses small, round pockets called thylakoids, which are the site of the light-dependent reactions of photosynthesis. It also contains the chloroplast's light-absorbing pigments, including chlorophyll A and B. Specifically, the thylakoid membrane contains the electron transport chain - though it isn't called that - which pumps protons across the membrane in order to power ATP synthase.</p><button id='next' onclick='scene5_6()'>Next</button></div>");
}
function scene5_6() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_5.png' />");
    $(".block-right").append("<div class='sidebar'><p>The thylakoid lumen is the space within the thylakoid membrane, into which protons are pumped during the light-dependent reactions of photosynthesis. During active photosynthesis, these protons maintain a relatively low PH (between about 6.5 to about 4.5, depending on the quantity of light), making the thylakoid lumen slightly to moderately acidic.</p><button id='next' onclick='scene5_7()'>Next</button></div>");
}
function scene5_7() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_6.png' />");
    $(".block-right").append("<div class='sidebar'><p>The stroma (not to be confused with the <em>stoma</em>), is the fluid within the chloroplast. It is the site of the reactions of the Calvin cycle (the light-independent reactions), and serves a similar function to the cytoplasm within cells. In addition, because chloroplasts contain their own DNA and ribosomes, these organelles are located in the stroma. The stroma is thus the site of DNA transcription and translation within the chloroplast.</p><button id='next' onclick='scene5_8()'>Next</button></div>");
}
function scene5_8() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_7.png' />");
    $(".block-right").append("<div class='sidebar'><p>Thylakoids are arranged into stacks called grana (singular granum). Some thylakoids extend from one granum to a neighboring granum, connecting them. These are called lamellae. A chloroplast can have between 10 and 100 grana.</p><button id='next' onclick='scene5_9()'>Next</button></div>");
}
function scene5_9() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0;' id='leaf' src='assets/chloroplast_8.png' />");
    $(".block-right").append("<div class='sidebar'><p>As previously mentioned, chloroplasts contain their own ribosomes and DNA, which are suspended in the stroma. This is a significant piece of evidence for the endosymbiotic theory, which argues that chloroplasts and mitochondria were originally prokaryotes that once lived as independent organisms and were consumed by eukaryotic cells.</p><button id='next' onclick='scene6_1()'>Continue</button></div>");
}

function scene6_1() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene6_2
    })
}
function scene6_2() {
    $("#frame").empty();
    $("#frame").append("<img id='chlorophyll' style='opacity: 0;' src='assets/chlorophyll.png' />");
    anime({
        targets: "#chlorophyll",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
        complete: scene6_3
    })
}
function scene6_3() {
    $(".block-right").append("<div class='sidebar'><p>Inside the thalykoids are light-absorbing pigments. There are a number of these, but the most common are the chlorophylls: chlorophyll A and chlorophyll B. These pigments are green, because they absorb nearly all wavelengths of light except green.</p><button id='next' onclick='scene6_4()'>Next</button></div>")
}
function scene6_4() {
    $(".block-right").empty();
    $("#frame").append("<img class='obj' style='top: 0; left: 0; opacity: 0;' id='chlorophyll-circled' src='assets/chlorophyll-circled.png' />");
    $(".block-right").append("<div class='sidebar'><p>The only difference between these two molecules is that chlorophyll A contains a methyl group where chlorophyll B contains a carboxyl group. This change affects the wavelengths of light that the two compounds absorb.</p><button id='next' onclick='scene7_1()'>Continue</button></div>");
    anime({
        targets: "#chlorophyll-circled",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400
    })
}

function scene7_1() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene7_2
    })
}
function scene7_2() {
    $("#frame").empty();
    $("#frame").append("<img id='chloroplast' class='obj' style='opacity: 0; top: 0; left: 0;' src='assets/chloroplast-highlight.png' />");
    anime({
        targets: "#chloroplast",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
        complete: scene7_3
    })
}
function scene7_3() {
    $(".block-right").append("<div class='sidebar'><p>Moving back to the chloroplast, let's take a closer look at the thylakoid membrane, which you can see highlighted on your screen. Click in the box to zoom in on it!</p></div>");
    $("#frame").append("<div class='hitbox obj' style='top: 167px; left: 220px; width: 38px; height: 18px;' onclick='scene8_1()'></div>")
}

function scene8_1() {
    $(".block-right").empty();
    anime({
        targets: '#frame *',
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 400,
        complete: scene8_2
    })
}
function scene8_2() {
    $("#frame").empty();
    $("#frame").append("<img id='membrane' class='obj membrane' style='opacity: 0; top: 0; left: 0;' src='assets/thylakoid-membrane.png' />");
    $("#frame").append("<img id='plastoquinone' class='obj membrane' style='opacity: 0; top: 0; left: 0;' src='assets/plastoquinone.png' />");
    anime({
        targets: ".membrane",
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 400,
        complete: scene8_3
    })
}
function scene8_3() {
    $(".block-right").append("<div class='sidebar'><p>The thylakoid membrane, like nearly all cellular membranes, is composed of a phospholipid bilayer. As you may recall from studying the fluid mosaic model of the cell membrane, these bilayers have many components - such as proteins, lipids, and many others - that help to perform many functions integral to the functioning of the cell. That is no different across the thylakoid membrane, which additionally contains a variety of molecular machinery used in the process of the light-dependent reactions of photosynthesis.</p><button id='next' onclick='scene8_4()'>Next</button></div>");
}
function scene8_4() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>These pieces of molecular machinery - mostly proteins - include (going from left to right), photosystem II, plastoquinone, the cytochrome b<sub>6</sub>f complex, plastocyanin, photosystem I, ferredoxin, photosynthetic FNR, and ATP synthase. These parts will be explained in more detail as they become relevant.</p><button id='next' onclick='scene8_5()'>Next</button></div>");
}
function scene8_5() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>All steps of photosynthesis are happening all the time, but we're going to (fairly arbitrarily) move left to right, starting on photosystem I.<br><br> The first step of photosynthesis is that a photon of light hits photosystem I. This infusion of energy excites its electrons, which then have the energy to move to plastoquinone, which has a slightly higher electroaffinity than photosystem I. This is a redox reaction in which plastoquinone is reduced, pulling two protons from the stroma into itself and becoming plastoquinol.</p><button id='next' onclick='scene8_6()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim1()'>Replay</button></div>");
    $("#frame").append("<img class='anim-component obj' id='oxygen1' style='opacity: 0; top: 289px; left: 54px;' src='assets/oxygen.png' />");
    $("#frame").append("<img class='anim-component obj hydrogen' id='hydrogen1' style='opacity: 0; top: 311px; left: 39px;' src='assets/hydrogen.png' />");
    $("#frame").append("<img class='anim-component obj hydrogen' id='hydrogen2' style='opacity: 0; top: 311px; left: 78px;' src='assets/hydrogen.png' />");
    $("#frame").append("<img class='anim-component obj electron' id='electron1' style='opacity: 0; left: 61px; top: 223px;' src='assets/electron.png' />");
    $("#frame").append("<img class='anim-component obj electron' id='electron2' style='opacity: 0; left: 93px; top: 224px;' src='assets/electron.png' />");
    $("#frame").append("<img class='anim-component obj proton' id='proton1' style='opacity: 0; left: 143px; top: 81px;' src='assets/proton.png' />");
    $("#frame").append("<img class='anim-component obj proton' id='proton2' style='opacity: 0; left: 273px; top: 103px;' src='assets/proton.png' />");
    $("#frame").append("<img class='anim-component obj proton' id='proton3' style='opacity: 0; left: 213px; top: 26px;' src='assets/proton.png' />");
    anime({
        targets: ".anim-component",
        opacity: "100%",
        duration: 300,
        easing: "easeInOutQuad"
    })
    ldAnim1();
}
function ldAnim1() {
    $("#frame").append("<img class='obj' id='photon1' src='assets/photon.png' style='opacity: 0;' />");
    $("#electron1").css("top", "223px"); $("#electron1").css("left", "61px");
    $("#electron2").css("top", "224px"); $("#electron2").css("left", "93px")
    $("#proton1").css("top", "81px"); $("#proton1").css("left", "143px");
    $("#proton2").css("top", "103px"); $("#proton2").css("left", "273px");
    anime({
        targets: "#photon1",
        opacity: { 
            value: "100%", 
            easing: "easeInOutQuad", 
            duration: 300,
            delay: 400
        },
        top: {
            value: "160px",
            easing: "easeInCubic",
            duration: 600,
            delay: 400
        },
        left: {
            value: "75px",
            easing: "easeInCubic",
            duration: 600,
            delay: 400
        },
        complete: function(anim) {
            anime({
                targets: "#photon1",
                opacity: { value: "0", easing: "easeInOutQuad", duration: 300, delay: 300 },
                complete: function() {
                    $("#photon1").remove();
                    anime({
                        targets: "#electron1",
                        left: "128px",
                        top: "204px",
                        easing: "easeInCubic",
                        duration: 600,
                        delay: 0
                    })
                    anime({
                        targets: "#electron2",
                        left: "156px",
                        top: "215px",
                        easing: "easeInCubic",
                        duration: 600,
                        delay: 0
                    })
                    anime({
                        targets: "#proton1",
                        left: "139px",
                        top: "167px",
                        easing: "easeInCubic",
                        duration: 600,
                        delay: 600
                    })
                    anime({
                        targets: "#proton2",
                        left: "165px",
                        top: "180px",
                        easing: "easeInCubic",
                        duration: 600,
                        delay: 600
                    })
                }
            });
        }
    })
}
function scene8_6() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>While the electrons pass to plastoquinone, the plant cell will split a water molecule inside the thalykoid lumen, producing 2 protons and 2 electrons (from the hydrogen atoms), and 1 oxygen atom. The new electrons will enter photosystem I to replace the electrons that passed to plastoquinone. The oxygen atom will bond with other oxygen atoms produced by the light-dependent reaction to form oxygen gas (O<sub>2</sub>), and diffuse out of the chloroplast. The hydrogen atoms, having lost their electrons, will become protons, contributing to the proton gradient that is being established between the thylakoid lumen and the stroma.</p><button id='next' onclick='scene8_7()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim2(true)'>Replay</button></div>");
    ldAnim2(false)
}
function ldAnim2(played) {
    if (played) {
        $("#hydrogen1").css("opacity", "100%");
        $("#hydrogen2").css("opacity", "100%");
        $("#oxygen1").css("opacity", "100%");

        $("#proton4").remove();
        $("#proton5").remove();
        $("#electron3").remove();
        $("#electron4").remove();
        $("#oxygen2").remove();
    }
    anime({
        targets: ["#hydrogen1", "#hydrogen2", "#oxygen1"],
        opacity: "0",
        easing: "easeInOutQuad",
        duration: 600,
        delay: played ? 600 : 0
    })
    $("#frame").append("<img class='anim-component obj proton' id='proton4' style='opacity: 0; left: 122px; top: 338px;' src='assets/proton.png' />")
    $("#frame").append("<img class='anim-component obj proton' id='proton5' style='opacity: 0; left: 124px; top: 285px;' src='assets/proton.png' />")
    $("#frame").append("<img class='anim-component obj electron' id='electron3' style='opacity: 0; left: 57px; top: 282px;' src='assets/electron.png' />")
    $("#frame").append("<img class='anim-component obj electron' id='electron4' style='opacity: 0; left: 56px; top: 338px;' src='assets/electron.png' />")
    $("#frame").append("<img class='anim-component obj oxygen' id='oxygen2' style='opacity: 0; left: 86px; top: 308px;' src='assets/oxygen.png' />")
    anime({
        targets: ["#proton4", "#proton5", "#electron3", "#electron4", "#oxygen2"],
        opacity: "100%",
        easing: "easeInOutQuad",
        duration: 600,
        delay: played ? 1200 : 600
    })
    anime({
        targets: "#electron3",
        top: "223px",
        left: "61px",
        easing: "easeInCubic",
        duration: 600,
        delay: played ? 1500 : 900
    })
    anime({
        targets: "#electron4",
        top: "224px",
        left: "93px",
        easing: "easeInCubic",
        duration: 600,
        delay: played ? 1500 : 900
    })
}

function scene8_7() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>The next stage in the electrons' journey is the cytochrome b<sub>6</sub>f complex. This is done through another redox reaction, in which plastoquinol is oxidized back to plastoquinone, and the cytochrome b<sub>6</sub>f complex is reduced by the addition of the two electrons. However, this is <em>also</em> the next stage for the protons that were bonded to plastoquinone (which became plastoquinol), after which they enter the thylakoid lumen, strengthening the proton gradient between it and the stroma.</p><button id='next' onclick='scene8_8()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim3(true)'>Replay</button></div>");
    ldAnim3(false)
}
function ldAnim3(played) {
    $("#hydrogen1").remove(); $("#hydrogen2").remove(); $("#oxygen1").remove();
    if (played) {
        $("#electron1").css("top", "204px"); $("#electron1").css("left", "128px")
        $("#electron2").css("top", "215px"); $("#electron2").css("left", "156px")
        $("#proton1").css("top", "167px"); $("#proton1").css("left", "139px")
        $("#proton2").css("top", "180px"); $("#proton2").css("left", "165px")
    }
    anime({
        targets: "#electron2",
        left: "226px", 
        top: "226px",
        easing: "easeInCubic",
        duration: 600,
        delay: 300
    })
    anime({
        targets: "#electron1",
        left: "192px",
        top: "227px",
        easing: "easeInCubic",
        duration: 600,
        delay: 300,
        complete: function() {
            anime({
                targets: "#proton1",
                top: [
                    { value: "191px", duration: 600, easing: "easeInCubic" },
                    { value: "291px", duration: 600, delay: 150, easing: "easeInCubic" }
                ],
                left: [
                    { value: "211px", duration: 600, easing: "easeInCubic" },
                    { value: "203px", duration: 600, delay: 150, easing: "easeInCubic" }
                ]
            })
            anime({
                targets: "#proton2",
                top: [
                    { value: "191px", duration: 600, delay: 500, easing: "easeInCubic" },
                    { value: "325px", duration: 600, delay: 150, easing: "easeInCubic" }
                ],
                left: [
                    { value: "211px", duration: 600, delay: 500, easing: "easeInCubic" },
                    { value: "288px", duration: 600, delay: 150, easing: "easeInCubic" }
                ]
            })
        }
    })
}
// PLASTOCYANIN (AND FOLLOWING) ONLY TAKES ONE ELECTRON AT A TIME!
function scene8_8() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>One of the electrons is then passed, in another redox reaction, to the plastocyanin molecule, oxidizing cytochrome b,sub>6</sub>f and reducing plastocyanin. From this point on, each electron carrier can only hold one electron at a time. The plastocyanin then passes one of those electrons up to photosystem I, in another redox reaction. This frees it up to take the second electron from the cytochrome b<sub>6</sub>f complex. Why is photosystem I numbered I even though it happens later? Because it was discovered first, and biologists are bad at naming things, that's why.</p><button id='next' onclick='scene8_9()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim4(true)'>Replay</button></div>");
    ldAnim4(false)
}
function ldAnim4(played) {
    if (played) {
        $("#electron2").css("top", "226px"); $("#electron2").css("left", "226px"); 
        $("#electron1").css("top", "227px"); $("#electron1").css("left", "192px"); 
    }
    anime({
        targets: "#electron2",
        top: [
            { value: "280px", duration: 1000, easing: "easeInCubic" },
            { value: "165px", duration: 1000, easing: "easeInCubic" }
        ],
        left: [
            { value: "255px", duration: 1000, easing: "easeInCubic" },
            { value: "314px", duration: 1000, easing: "easeInCubic" }
        ],
        complete: function() {
            anime({
                targets: "#electron1",
                top: [
                    { value: "280px", duration: 1000, easing: "easeInCubic" }
                ],
                left: [
                    { value: "255px", duration: 1000, easing: "easeInCubic" }
                ],
            })
        }
    })
}
function scene8_9() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>Another photon of light then hits photosystem I, re-exciting its electrons, which are then picked up in yet another redox reaction by a ferredoxin molecule.</p><button id='next' onclick='scene8_10()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim5(true)'>Replay</button></div>");
    ldAnim5(false)
}
function ldAnim5(played) {
    if (played) {
        $("#electron1").css("top", "280px"); $("#electron1").css("left", "255px");
        $("#electron2").css("top", "165px"); $("#electron2").css("left", "314px");
    }
    $("#frame").append("<img class='obj' id='photon1' style='opacity: 0;' src='assets/photon.png' />");
    anime({
        targets: "#photon1",
        opacity: { 
            value: "100%", 
            easing: "easeInOutQuad", 
            duration: 300,
            delay: 400
        },
        top: {
            value: "185px",
            easing: "easeInCubic",
            duration: 600,
            delay: 400
        },
        left: {
            value: "314px",
            easing: "easeInCubic",
            duration: 600,
            delay: 400
        },
        complete: function() {
            anime({
                targets: "#photon1",
                opacity: { value: "0", easing: "easeInOutQuad", duration: 300, delay: 300 },
                complete: function() {
                    $("#photon1").remove();
                    anime({
                        targets: "#electron2",
                        left: "347px",
                        top: "139px",
                        duration: 600,
                        easing: "easeInCubic",
                        complete: function() {
                            anime({
                                targets: "#electron1",
                                top: "165px",
                                left: "314px",
                                duration: 600,
                                easing: "easeInCubic",
                                complete: function() {
                                    anime({
                                        targets: "#electron2",
                                        top: "121px",
                                        left: "380px",
                                        duration: 600,
                                        easing: "easeInCubic"
                                    })
                                    anime({
                                        targets: "#electron1",
                                        left: "347px",
                                        top: "139px",
                                        duration: 600,
                                        delay: 600,
                                        easing: "easeInCubic"
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })   
}
function scene8_10() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>The last stage in the electron's journey is a redox reaction between ferredoxin and NAD<sup>+</sup>, catalyzed by the ferredoxin-NADP<sup>+</sup> reductase enzyme. NADP<sup>+</sup> is the final electron carrier for photosynthesis, carrying away electrons in the form of NADPH.</p><button id='next' onclick='scene8_11()' style='margin-right: 10px;'>Next</button><button id='replay' onclick='ldAnim6(true)'>Replay</button></div>");
    ldAnim6(false)
}
async function ldAnim6(played) {
    if (played) {
        $("#electron2").css("top", "121px"); $("#electron2").css("left", "380px"); $("#electron2").css("opacity", "100%");
        $("#electron1").css("top", "139px"); $("#electron1").css("left", "347px"); $("#electron1").css("opacity", "100%");
    }
    $("#frame").append("<img class='anim-component obj nadp' id='nadp' style='left: 500px; top: 10px;' src='assets/nadp.png' />")
    anime({
        targets: "#nadp",
        top: "83px",
        left: "399px",
        duration: 600,
        delay: 300,
        easing: "easeInCubic",
        complete: async function() {
            await sleep(600);
            $("#frame").append("<img class='anim-component obj nadp nadph' id='nadph' style='left: 398px; top: 82px;' src='assets/nadph.png' />");
            anime({
                targets: "#electron2",
                top: "-22px",
                left: "221px",
                opacity: { value: "0", duration: 600, delay: 1000, easing: "easeInOutQuad" },
                duration: 1000,
                delay: 1000,
                easing: "easeInCubic"
            })
            anime({
                targets: ".nadp",
                top: "-62px",
                left: "240px",
                opacity: { value: "0", duration: 600, delay: 1000, easing: "easeInOutQuad" },
                duration: 1000,
                delay: 1000,
                easing: "easeInCubic",
                complete: function() {
                    $(".nadp").remove(); $(".nadph").remove();
                    anime({
                        targets: "#electron1",
                        top: "121px",
                        left: "380px",
                        duration: 600,
                        delay: 300,
                        easing: "easeInCubic",
                        complete: async function() {
                            await sleep(300);
                            $("#frame").append("<img class='anim-component obj nadp' id='nadp' style='left: 500px; top: 10px;' src='assets/nadp.png' />")
                            anime({
                                targets: "#nadp",
                                top: "83px",
                                left: "399px",
                                duration: 600,
                                delay: 300,
                                easing: "easeInCubic",
                                complete: async function() {
                                    await sleep(600);
                                    $("#frame").append("<img class='anim-component obj nadp nadph' id='nadph' style='left: 398px; top: 82px;' src='assets/nadph.png' />");
                                    anime({
                                        targets: "#electron1",
                                        top: "-22px",
                                        left: "221px",
                                        opacity: { value: "0", duration: 600, delay: 1000, easing: "easeInOutQuad" },
                                        duration: 1000,
                                        delay: 1000,
                                        easing: "easeInCubic"
                                    })
                                    anime({
                                        targets: ".nadp",
                                        top: "-62px",
                                        left: "240px",
                                        opacity: { value: "0", duration: 600, delay: 1000, easing: "easeInOutQuad" },
                                        duration: 1000,
                                        delay: 1000,
                                        easing: "easeInCubic",
                                        complete: function() {
                                            $(".nadp").remove(); $(".nadph").remove();
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function scene8_11() {
    $(".block-right").empty();
    $(".block-right").append("<div class='sidebar'><p>Over the course of the light-dependent reactions, protons are continuously pumped into the thylakoid lumen, both through the splitting of water into its component atoms, and through the movement of electrons. The ultimate goal of this process is simple - to establish a proton gradient across the membrane. Because of the mass of protons in the lumen, which repel each other, protons will be forced out of the lumen through the primary hole available - the ATP synthase enzyme. The movement of protons through ATP synthase powers the addition of an inorganic phosphate molecule onto an ADP molecule, forming fully charged ATP molecule.</p><button id='next' onclick='scene9_1()' style='margin-right: 10px;'>Continue</button><button id='replay' onclick='ldAnim7(true)'>Replay</button></div>");
    ldAnim7(false)
}
function ldAnim7(played) {
    if (played) {
        $("#proton2").css("top", "325px"); $("#proton2").css("left", "288px"); 
    }
    anime({
        targets: "#proton2",
        top: "332px",
        left: "459px",
        duration: 400,
        easing: "easeInCubic",
        complete: function() {
            anime({
                targets: "#proton2",
                top: "39px",
                left: "459px",
                duration: 400,
                easing: "easeInCubic",
                complete: function() {
                    anime({
                        targets: "#proton2",
                        top: "39px",
                        left: "359px",
                        duration: 400,
                        easing: "easeInCubic"
                    })
                }
            })
        }
    })
}

scene1();