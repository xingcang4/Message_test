import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { fetchSms } from "../modules/SmsModule";

const SmsScreen = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    loadSms();
  }, []);

  const loadSms = async () => {
    try {
      const smsList = await fetchSms();
      console.log('Fetched SMS:', smsList);  // 这里输出短信内容
      setMessages(smsList);
    } catch (error) {
      console.error('Error fetching SMS:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={loadSms} style={{ marginBottom: 20, padding: 10, backgroundColor: "blue" }}>
        <Text style={{ color: "white", textAlign: "center" }}>Reload SMS</Text>
      </TouchableOpacity>
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.address}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SmsScreen;
