import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  container: {
    height: 700,
    marginVertical: 70,
    marginHorizontal: "10%",
  },
  text: {
    fontSize: 100,
    textAlign: "center",
  },
})

Font.registerEmojiSource({
  format: "png",
  url: "https://twemoji.maxcdn.com/2/72x72/",
})
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page>
      <View style={styles.container}>
        <Text style={styles.text}>😀💩👻🙈</Text>
      </View>
    </Page>
  </Document>
)

export default MyDocument
