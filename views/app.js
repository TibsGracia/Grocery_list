
$("#saveBtn").on('click', function () {
    $.ajax({
        url: '/create',
        method: "PUT",
        dataType: 'json',
        data: {item:$('#item'), qty: $('#qty'), priority:$('#priority')},
        success: function () {

        }
    })
})

$("#updateBtn").on('click', function () {
    $.ajax({
        url: '/create',
        method: 'POST',
        dataType: 'json',
        data: {item:$('#item'), qty: $('#qty'), priority:$('#priority')},
        success: function () {

        }
    })
})



