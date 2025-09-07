import './Navbar.css'; 

function Navbar() {


    return (
        <nav className="navbar-1">
            <ion-icon name="bonfire-sharp"></ion-icon>
            <h1 className='title'>Bornfire</h1>
            <div className="navbar-links-1">
                <ul>
                    <CustomLink href="/dashboard">Dashboard</CustomLink>
                    <CustomLink href="/products">Products</CustomLink>                   
                    <CustomLink href="/orders">Orders</CustomLink>                 
                    <CustomLink href="/accounts">My Account</CustomLink>        
                </ul>
            </div>
        </nav>
    );

    function  CustomLink ({ href, children, ...props}) {
            const path = window.location.pathname;

        return (
          <li className={path === href ? "navbar-item-1 active" : ""}>
                <a href={href} {...props} className='navbar-item-1'>
                    {children}
                </a>
            </li>
        );
    }
};


export default Navbar;