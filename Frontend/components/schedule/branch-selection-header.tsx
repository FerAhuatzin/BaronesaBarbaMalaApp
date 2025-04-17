import { router, useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

interface props {
  brandSelection: (brand: string) => void;
}

export default function BranchSelectionHeader({ brandSelection }: props) {
  const [selectedBrand, setSelectedBrand] = useState("Barbamala");

  const handleBrandSelection = (brand: string) => {
    setSelectedBrand(brand);
    brandSelection(brand);
  };

  return (
    <View style={styles.container0}>
      <View style={styles.container}>
        <View style={styles.brandContainer}>
          <TouchableOpacity onPress={() => handleBrandSelection("Barbamala")}>
            <Image
              source={require("../../assets/images/Barbamala-logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.brandContainer}>
          <TouchableOpacity onPress={() => handleBrandSelection("Baronesa")}>
            <Image
              source={require("../../assets/images/Baronesa-logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.underlineContainer}>
        <View
          style={[
            styles.underline,
            selectedBrand === "Barbamala"
              ? styles.selectedUnderline
              : styles.unselectedUnderline,
          ]}
        />
        <View
          style={[
            styles.underline,
            selectedBrand === "Baronesa"
              ? styles.selectedUnderline
              : styles.unselectedUnderline,
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container0: {
    backgroundColor: "white",
    paddingBottom: 20,
  },
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandContainer: {
    width: "48%",
  },
  underlineContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
  underline: {
    height: 2,
    width: "50%",
    marginTop: 5,
  },
  selectedUnderline: {
    backgroundColor: "black",
  },
  unselectedUnderline: {
    backgroundColor: "#CCCCCC",
  },
});
