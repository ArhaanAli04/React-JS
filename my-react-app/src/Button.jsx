function Button(){
    const styles={
        backgroundColor: "skyblue",
        color: "white",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontfamily: "'Courier New', Courier, monospace",
        padding: "10px 20px",
        
    }
    return(
        <button style={styles}>Click me</button>
    );
}
export default Button