import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce Valentin</h3>
            <div>
                <button>Notebooks</button>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Contacto</button>
            </div>
            <CartWidget />

        </nav>
    );
}

export default NavBar;
