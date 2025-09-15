import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();

  const features = [
    {
      title: 'Frontend Development',
      description: 'Built with React 18 and Bootstrap 5 for modern, responsive user interfaces.',
      technologies: ['React Hooks & Context API', 'React Router for SPA', 'Bootstrap for styling', 'Responsive design'],
      color: '#007bff',
    },
    {
      title: 'Backend Development',
      description: 'Powered by Node.js and Express with RESTful API architecture.',
      technologies: ['Express.js framework', 'JWT Authentication', 'Role-based access control', 'API rate limiting'],
      color: '#28a745',
    },
    {
      title: 'Database & Mobile',
      description: 'MongoDB for flexible data storage and React Native for cross-platform mobile development.',
      technologies: ['MongoDB with Mongoose', 'Data validation & relationships', 'React Native mobile app', 'Cross-platform compatibility'],
      color: '#17a2b8',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to WDP301 Assistants</Text>
        <Text style={styles.heroSubtitle}>
          A comprehensive web-based system demonstrating modern web technologies
          including React, React Native, Node.js, Express, and MongoDB.
        </Text>
        {user && (
          <Text style={styles.welcomeText}>
            Hello, {user.firstName}! 👋
          </Text>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Key Features & Technologies</Text>
        <Text style={styles.sectionSubtitle}>
          This application demonstrates proficiency in industry-standard web development technologies
        </Text>

        {features.map((feature, index) => (
          <View key={index} style={[styles.featureCard, { borderLeftColor: feature.color }]}>
            <Text style={[styles.featureTitle, { color: feature.color }]}>
              {feature.title}
            </Text>
            <Text style={styles.featureDescription}>
              {feature.description}
            </Text>
            <View style={styles.technologiesList}>
              {feature.technologies.map((tech, techIndex) => (
                <Text key={techIndex} style={styles.technologyItem}>
                  ✓ {tech}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.additionalFeatures}>
          <View style={styles.additionalFeatureCard}>
            <Text style={styles.additionalFeatureTitle}>Object-Oriented Design</Text>
            <Text style={styles.additionalFeatureDescription}>
              The application follows object-oriented principles with well-structured
              models, controllers, and services that promote code reusability and maintainability.
            </Text>
          </View>

          <View style={styles.additionalFeatureCard}>
            <Text style={styles.additionalFeatureTitle}>Team Collaboration</Text>
            <Text style={styles.additionalFeatureDescription}>
              Built with modern development practices including version control,
              modular architecture, and comprehensive documentation for effective team collaboration.
            </Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.primaryButtonText}>Browse Products</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.secondaryButtonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    backgroundColor: '#667eea',
    padding: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 22,
  },
  technologiesList: {
    marginTop: 8,
  },
  technologyItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    lineHeight: 20,
  },
  additionalFeatures: {
    marginTop: 16,
  },
  additionalFeatureCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  additionalFeatureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  additionalFeatureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  actionButtons: {
    marginTop: 24,
    gap: 12,
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;