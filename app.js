function logar() {
    var senha = window.document.getElementById('token')
    var texto = window.document.getElementById('texto_login')
    var message = window.document.querySelector('input#mensagem')
    texto.innerHTML = 'ar'
    if (senha.value != "agral1234") {
        texto.innerHTML = "Credenciais inválidas, tente novamente!"
        return false
    }
}

function json_analyze(){
    $.getJSON("package.json", function(json) {
        console.log(json); 
        arquivo_json = window.document.getElementById("myData")
        arquivo_json.innerHTML += "<br>"
        arquivo_json.innerHTML += "{ <br> "
        for (x in json) {
            var json_line = "&emsp;" + "\"" + x + "\":"
            if (json[x].constructor == Object) {
                    var json_value = "{ <br> "
                    for (y in json[x]) {
                        json_value += "&emsp;&emsp;" + "\"" + y + "\": \""
                        json_value += json[x][y] + "\", <br>"
                        
                    }
                    json_value = json_value.slice(0, -6)
                    json_value += "<br> }, <br>"
                    json_line += json_value
                    

        } else if (Array.isArray(json[x])) {
            json_line += " [ <br> &emsp;&emsp;"
            for (z in json[x]) {
                json_line += json[x][z] + ', <br> &emsp;&emsp;'
            }
            json_line = json_line.slice(0, -19)
            json_line +="<br> ], <br>"
            
        } else {
                json_line += "\"" +json[x] + "\",<br>"
            
        }
    
            arquivo_json.innerHTML += json_line
    }
        arquivo_json.innerHTML = arquivo_json.innerHTML.slice(0, -5)
        arquivo_json.innerHTML += "<br> }"
    });
}

function mensagem(texto){
    urlp=[];s=location.toString().split('?');s=s[1].split('&');for(i=0;i<s.length;i++){u=s[i].split('=');urlp[u[0]]=u[1];}
    texto.innerHTML = "Mensagem de login: " + urlp['mensagem'].replaceAll("+", " ")
    texto.innerHTML += "<br>"
}

function voltar() {
    window.location.replace("login.html")
}