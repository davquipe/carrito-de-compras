import data from './data';

function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">tech</a>
      </header>
      <main>
        <h1>Productos Destacados</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>S/{product.price}</strong>
                </p>
                <button>Agregar a carrito</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
