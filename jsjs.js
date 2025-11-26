const url = "https://jsonpçaceholder.typicode.com/todos/1";
      const output = document.getElementById(output);
      const status = document.getElementById("status");
      function setLoading(on) {
        status.innerHTML = on
        ? 'carregando <sapan class="spinner" aria-hidden="true"></sapan>'
        : "";
    
    }

    document
    .getElementById("btn-fetch")
    .addEventListener("click", async () => {
        output.textContent = " ";
        setLoading(true);
         try{
            const res = await fetch(url, { method: "GET"});
            if (!res.ok) throw new Error("status HTTP:" + res.status)
            const res = await res.json();
            output.textContent = JSON.stringify(DataTransfer, null, 2);
         } catch (err) {
          output.textContent = "Erro: " + err.message;
          output.classList.add9("error");
          finally {
            setLoading(false);
          }
        });
    