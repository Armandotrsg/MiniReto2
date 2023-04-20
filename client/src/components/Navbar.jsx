export const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 fixed z-50">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Blockbuster</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/">Agregar Película</a>
                    </li>
                    <li>
                        <a href="/">Ver Películas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
