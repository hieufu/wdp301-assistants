import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#007bff', '#0056b3']}
        style={styles.heroSection}
      >
        <Text style={styles.heroTitle}>WDP301 Assistants</Text>
        <Text style={styles.heroSubtitle}>
          Master fullstack development with React, Node.js, Express, React Native, and MongoDB
        </Text>
      </LinearGradient>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Learning Objectives</Text>
        
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🌐</Text>
            <Text style={styles.featureTitle}>Web Development</Text>
            <Text style={styles.featureDescription}>
              Master React and modern web techniques for building dynamic user interfaces.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>⚙️</Text>
            <Text style={styles.featureTitle}>Backend Skills</Text>
            <Text style={styles.featureDescription}>
              Develop proficiency in Node.js and Express.js for scalable server-side applications.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📱</Text>
            <Text style={styles.featureTitle}>Mobile Development</Text>
            <Text style={styles.featureDescription}>
              Learn React Native to create cross-platform mobile applications.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>👥</Text>
            <Text style={styles.featureTitle}>Team Collaboration</Text>
            <Text style={styles.featureDescription}>
              Work with 3-5 team members to complete projects and develop collaboration skills.
            </Text>
          </View>
        </View>
      </View>

      {/* Technology Stack */}
      <View style={styles.techSection}>
        <Text style={styles.sectionTitle}>Technology Stack</Text>
        
        <View style={styles.techCard}>
          <Text style={styles.techCategory}>Frontend</Text>
          <Text style={styles.techList}>
            ✓ React with TypeScript{'\n'}
            ✓ React Native{'\n'}
            ✓ Modern UI/UX{'\n'}
            ✓ Responsive design
          </Text>
        </View>

        <View style={styles.techCard}>
          <Text style={styles.techCategory}>Backend</Text>
          <Text style={styles.techList}>
            ✓ Node.js runtime{'\n'}
            ✓ Express.js framework{'\n'}
            ✓ MongoDB with Mongoose{'\n'}
            ✓ RESTful API design
          </Text>
        </View>

        <View style={styles.techCard}>
          <Text style={styles.techCategory}>Mobile</Text>
          <Text style={styles.techList}>
            ✓ React Native{'\n'}
            ✓ Cross-platform development{'\n'}
            ✓ Native navigation{'\n'}
            ✓ API integration
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  techSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  techCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  techCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  techList: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
});

export default HomeScreen;