import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { styles } from "./documentStyles/documentStyles";

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
