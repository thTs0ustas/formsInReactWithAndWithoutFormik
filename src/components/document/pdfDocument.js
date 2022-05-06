import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";

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
function MyDocument({ children }) {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>{children}</View>
      </Page>
    </Document>
  );
}

MyDocument.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyDocument };
