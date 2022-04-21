import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({ children }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>{children}</View>
    </Page>
  </Document>
);

export { MyDocument };
