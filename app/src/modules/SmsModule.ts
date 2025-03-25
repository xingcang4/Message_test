import { NativeModules } from "react-native";

const { SmsModule } = NativeModules;

export const fetchSms = async (): Promise<any[]> => {
  try {
    const smsJson = await SmsModule.fetchSms();
    return JSON.parse(smsJson);
  } catch (error) {
    console.error("Error fetching SMS:", error);
    return [];
  }
};
