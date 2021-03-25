$(function(){
    const tbody = $('.table tbody');

    function obterDados() {
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            type: 'GET',
            beforeSend: function() {
                $('.table').after('<p class="loading> Aguarde! carregando... </p>');
            },
            error: function() {
                $('.table').after('<p class="loading> Deu ruim </p>');
            },
            success: function(dados) {
                mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();
            }
        });
        function mostrarDados(dados) {
            $.each(dados, function(i, el) {
                tbody.append(`
                <tr>
                    <th scope="row">${el.id}</th>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.address.street}</td>
                    <td>${el.address.suite}</td>
                    <td>${el.address.city}</td>
                    <td>${el.address.zipcode}</td>
                </tr>
                `);
            });
        }
    }

    obterDados();

});