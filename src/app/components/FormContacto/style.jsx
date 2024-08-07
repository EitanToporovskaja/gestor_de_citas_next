export const style = {
    // Estilo para el contenedor que envuelve el formulario
    container: {
        display: "flex",
        justifyContent: "center", // Centrar horizontalmente
        alignItems: "center",     // Centrar verticalmente
        height: "100vh",          // Ocupa toda la altura de la ventana
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#f8d09d",
        borderRadius: "3%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "60%",
        padding: "5%",
        margin: "1%",
        boxSizing: "border-box" // Asegura que el padding y border se incluyan en el width
    },
    div: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "1%",
        border: "0"
    },
    label: {
        color: "black"
    }
};
