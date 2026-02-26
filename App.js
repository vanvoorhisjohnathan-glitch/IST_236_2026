import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from "react-native";

// Import the responses
import { magicResponses } from './MagicEightBallResponses';

export default function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAsk = () => {
    if (!question.trim()) return;

    const randomAnswer = magicResponses[Math.floor(Math.random() * magicResponses.length)];
    setAnswer(randomAnswer);
    setModalVisible(true);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Magic Eight Ball</Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Ask your question</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Type your question here"
          placeholderTextColor="#aaa"
          value={question}
          onChangeText={setQuestion}
        />

        <TouchableOpacity style={styles.button} onPress={handleAsk}>
          <Text style={styles.buttonText}>Ask the Magic Eight Ball</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.overlay}>
            <View style={styles.modal}>
              <Text style={styles.modalHeading}>Your Question:</Text>
              <Text style={styles.modalContent}>{question}</Text>

              <Text style={styles.modalHeading}>Magic Eight Ball says:</Text>
              <Text style={styles.modalContent}>{answer}</Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    color: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#4b6cff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalHeading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  modalContent: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 8,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: '#4b6cff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
