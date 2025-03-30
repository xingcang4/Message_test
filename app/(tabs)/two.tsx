import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';

const messages = [
  { id: '1', sender: '+123456789', content: 'Hello, how are you?' },
  { id: '2', sender: '+987654321', content: 'Meeting at 3 PM today.' },
  { id: '3', sender: '+112233445', content: 'Don’t forget to buy groceries!' },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📩 Saved Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text style={styles.sender}>From: {item.sender}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  messageItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    width: '100%',
  },
  sender: {
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    marginTop: 5,
    color: '#666',
  },
});
