document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    if (form) {
        const handleSubmit = (event) => {
            event.preventDefault();
        
            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const mensagem = document.getElementById('mensagem').value;
        
            const data = { name, email, telefone, whatsapp, mensagem };
        
            fetch('https://api.sheetmonkey.io/form/eSUWp2NVwCT5VD4VV1Au74', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    alert('Dados enviados com sucesso para a planilha!');
                    
                    // Recarrega a página
                    window.location.reload();
                } else {
                    alert('Erro ao enviar dados para a planilha.');
                }
            })
            
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
                alert('Erro ao enviar dados para a planilha.');
            });
        }
        
        form.addEventListener('submit', handleSubmit);
        
        // Certifique-se de que o campo de telefone esteja presente no DOM antes de tentar aplicar a máscara
        const telefoneInput = document.getElementById('telefone');
        const whatsappInput = document.getElementById('whatsapp');
        
        if (telefoneInput) {
            // Use jQuery Mask para aplicar a máscara ao campo de telefone
            $(telefoneInput).mask('(00) 00000-0000');
            $(whatsappInput).mask('(00) 00000-0000');
        }
    } else {
        console.error('Elemento <form> não encontrado no DOM.');
    }
});
