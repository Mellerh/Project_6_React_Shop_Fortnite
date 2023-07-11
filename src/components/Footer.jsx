function Footer() {
    return(
        <footer className="page-footer pink darken-1">
          <div className="footer-copyright pink darken-1">
            <div className="container ">
                
            {/* добавляем актуальный год */}
            © {new Date().getFullYear()} _React Fortnite shop_
            <span className="right">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </footer>
    )
}

export default Footer;