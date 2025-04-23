import { StyleSheet } from "react-native";
import { fontSizes } from "./font-sizes";

export const commonStyles = StyleSheet.create({
  // Estilos de contenedor comunes
  container: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 30,
    marginBottom: 10,
  },
  
  // Estilos de página comunes
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },

  flex: {
    flex: 1,
  },
  
  formContainer: {
    paddingBottom: 20,
  },

  // Estilos de contenedores de tarjetas
  cardContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 0,
    width: "100%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden'
  },
  
  // Estilos de encabezado comunes
  header: {
    backgroundColor: "white",
  },
  
  // Estilos de texto comunes
  title: {
    fontSize: fontSizes.titles,
    width: "100%",
    alignSelf: "center",
  },

  subtitle: {
    fontSize: fontSizes.subTitles,
    paddingTop: 10,
    paddingBottom: 20,
  },

  sectionTitle: {
    fontSize: fontSizes.largeSubTitles,
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },

  text: {
    fontSize: fontSizes.body,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },

  serviceText: {
    fontSize: fontSizes.subTitles,
    marginBottom: 5,
  },

  captionText: {
    fontSize: fontSizes.body,
    color: '#666',
    marginBottom: 3,
  },

  buttonText: {
    fontSize: fontSizes.body,
    color: "white",
  },

  underlinedText: {
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
  },

  centeredMessage: {
    fontSize: fontSizes.subTitles,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "500",
  },
  
  // Estilos de botón comunes
  button: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
  },
  
  primaryButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },

  actionButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },

  roundedButton: {
    width: "40%",
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },

  // Estilos para filas comunes
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Estilos para footers
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  
  // Estilos de entrada de formulario comunes
  inputContainer: {
    marginBottom: 20,
  },
  
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    padding: 15,
    fontSize: fontSizes.body,
    height: 50,
    backgroundColor: "#fff",
  },

  // Estilos para listas
  scrollContainer: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },

  listContainer: {
    paddingBottom: 20,
  },

  // Estilos para divisores
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },

  // Borde horizontal
  borderTop: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: 20,
    paddingVertical: 20,
  },

  // Imágenes
  brandLogo: {
    height: 30,
    resizeMode: "contain",
  },

  branchImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },

  // Contenedores con ancho estándar
  widthContainer: {
    width: "90%",
    alignSelf: "center",

  },

  // Estilos para modales
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "flex-end",
    alignItems: "center",
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 50,
  },

  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 5,
  },

  containerFooter: {
    backgroundColor: "white",
    height: 70,
  },
}); 