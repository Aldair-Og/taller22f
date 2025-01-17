
            let carrito = [];
        

            function agregarAlCarrito(nombre, precio) {
                carrito.push({ nombre: nombre, precio: precio });
                alert(`${nombre} agregado al carrito`);
            }

            function verCarrito() {
                const modal = document.getElementById('carritoModal');
                modal.classList.remove('hidden'); 
                actualizarCarrito();
            }
        

            function actualizarCarrito() {
                const listaCarrito = document.getElementById('carrito-lista');
                const totalCarrito = document.getElementById('total-carrito');
                listaCarrito.innerHTML = ''; 
        
                let total = 0;
                carrito.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.classList.add('flex', 'justify-between', 'items-center');
                    li.innerHTML = `
                        <span>${item.nombre} - $${item.precio.toFixed(2)}</span>
                        <button onclick="eliminarDelCarrito(${index})" class="text-red-500 ml-4">Eliminar</button>
                    `;
                    listaCarrito.appendChild(li);
                    total += item.precio;
                });
        
                totalCarrito.textContent = `$${total.toFixed(2)}`;
            }
        

            function eliminarDelCarrito(index) {
                carrito.splice(index, 1); 
                actualizarCarrito(); 
            }
        
            function comprarCarrito() {
                alert('Compra realizada con éxito');
                carrito = []; 
                actualizarCarrito(); 
                cerrarCarrito(); 
            }
        
            function cerrarCarrito() {
                const modal = document.getElementById('carritoModal');
                modal.classList.add('hidden'); 
            }