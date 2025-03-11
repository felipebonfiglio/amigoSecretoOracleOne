let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        console.log(`Amigos: ${amigos}`);
        document.getElementById('amigo').value = '';
        atualizarLista();
    } else if(amigos.includes(nome)){
        alert('Este nome já está na lista!');
    }
    else{
        alert('Por favor, insira um nome.');
    }
}


function atualizarLista() { {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.forEach(nome =>{
            const li = document.createElement('li');
            li.textContent = nome;
            lista.append(li);
        }) 
    }
    
}


function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `O amigo sorteado é: ${amigoSorteado}`
        lista.append(li);
        amigos = [];
    }
    else{
        alert('Não há amigos na lista para sortear.');
    }
    
}