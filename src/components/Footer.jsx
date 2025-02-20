function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; 2025 Tostadito - Todos los derechos reservados</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#4a2c2a",
      color: "white",
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
  };
  
  export default Footer;  