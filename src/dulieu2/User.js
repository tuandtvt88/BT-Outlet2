import { Outlet, useLocation } from "react-router-dom";

export function User() {
    const location = useLocation();

    return (
        <>
            <div className="menu">
                <div className="home">Home |</div>
                <div className="hot">Hot |</div>
                <div className="categogy">Categogy</div>
            </div>

            {/* Conditionally render the main section or the Outlet content */}
            {location.pathname === "/user/hot-product" || location.pathname === "/user/detail-product" ||
                location.pathname === "/user/category" ?(
                <Outlet />
            ) : (
                <div className="main">
                    <div className="slide item">Slides</div>
                    <div className="listproduct item">List Product</div>
                    <div className="topproduct item">Top Product</div>
                </div>
            )}

                <div className="footer">Footer</div>

        </>
    );
}
