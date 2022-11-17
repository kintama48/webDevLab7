// Task 1
$(document).ready(() => {
    $("#changeBtn").click(() => {
        let color = $("#colorInput").val();
        $('#sentence2').html(`I never saw a <b>${color}</b> Cow, I never hope to see one; But I can tell you, anyhow, I'd rather see than be one.`);
        $('#sentence1').html(`<b>${color}</b> Cow by Gelett Burgess (Published 1895)`);
    })

    $('#toggleColors').click(() => {
        let bg = $('#box1').css('background-color');
        if (bg === 'rgba(0, 0, 0, 0)') {
            let color = '#'+(Math.random().toString(16)+'00000').slice(2,8);
            $('#box1').css('background-color', color);
            $('#box2').css('background-color', color);
            $('#box3').css('background-color', color);
        } else {
            $('#box1').css('background-color', 'rgba(0, 0, 0, 0)');
            $('#box2').css('background-color', 'rgba(0, 0, 0, 0)');
            $('#box3').css('background-color', 'rgba(0, 0, 0, 0)');
        }
    })

    $('#toggleBorders').click(()=> {
        let bg = $('#box1').css('border-radius');
        if (bg === '0px') {
            $('#box1').css('border-radius', '10px');
            $('#box2').css('border-radius', '10px');
            $('#box3').css('border-radius', '10px');
        } else {
            $('#box1').css('border-radius', '0px');
            $('#box2').css('border-radius', '0px');
            $('#box3').css('border-radius', '0px');
        }
    })
});
