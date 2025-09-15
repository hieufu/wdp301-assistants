import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const DashboardScreen: React.FC = () => {
  // Mock data - would come from API
  const userStats = {
    activeProjects: 3,
    completedTasks: 12,
    teamMembers: 4,
    upcomingDeadlines: 2
  };

  const recentProjects = [
    {
      id: 1,
      title: 'E-commerce Web Application',
      status: 'in-progress',
      progress: 65,
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      status: 'testing',
      progress: 85,
      dueDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'API Documentation Portal',
      status: 'completed',
      progress: 100,
      dueDate: '2023-12-30'
    }
  ];

  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'planning': '#6c757d',
      'in-progress': '#007bff',
      'testing': '#ffc107',
      'completed': '#28a745',
      'on-hold': '#dc3545'
    };
    return statusMap[status] || '#6c757d';
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome back! Here's an overview of your progress.</Text>

      {/* Statistics Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📋</Text>
          <Text style={styles.statNumber}>{userStats.activeProjects}</Text>
          <Text style={styles.statLabel}>Active Projects</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>✅</Text>
          <Text style={styles.statNumber}>{userStats.completedTasks}</Text>
          <Text style={styles.statLabel}>Completed Tasks</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>👥</Text>
          <Text style={styles.statNumber}>{userStats.teamMembers}</Text>
          <Text style={styles.statLabel}>Team Members</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>⏰</Text>
          <Text style={styles.statNumber}>{userStats.upcomingDeadlines}</Text>
          <Text style={styles.statLabel}>Upcoming Deadlines</Text>
        </View>
      </View>

      {/* Recent Projects */}
      <View style={styles.projectsSection}>
        <Text style={styles.sectionTitle}>Recent Projects</Text>
        
        {recentProjects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(project.status) }]}>
                <Text style={styles.statusText}>{project.status.replace('-', ' ')}</Text>
              </View>
            </View>
            
            <Text style={styles.projectDate}>Due: {project.dueDate}</Text>
            
            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Progress: {project.progress}%</Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: `${project.progress}%`,
                      backgroundColor: project.progress === 100 ? '#28a745' : '#007bff'
                    }
                  ]} 
                />
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Learning Progress */}
      <View style={styles.learningSection}>
        <Text style={styles.sectionTitle}>Learning Progress</Text>
        
        <View style={styles.skillCard}>
          <Text style={styles.skillName}>React Development</Text>
          <View style={styles.skillProgressContainer}>
            <View style={styles.skillProgressBar}>
              <View style={[styles.skillProgressFill, { width: '80%', backgroundColor: '#28a745' }]} />
            </View>
            <Text style={styles.skillPercentage}>80%</Text>
          </View>
        </View>

        <View style={styles.skillCard}>
          <Text style={styles.skillName}>Node.js & Express</Text>
          <View style={styles.skillProgressContainer}>
            <View style={styles.skillProgressBar}>
              <View style={[styles.skillProgressFill, { width: '65%', backgroundColor: '#007bff' }]} />
            </View>
            <Text style={styles.skillPercentage}>65%</Text>
          </View>
        </View>

        <View style={styles.skillCard}>
          <Text style={styles.skillName}>React Native</Text>
          <View style={styles.skillProgressContainer}>
            <View style={styles.skillProgressBar}>
              <View style={[styles.skillProgressFill, { width: '45%', backgroundColor: '#ffc107' }]} />
            </View>
            <Text style={styles.skillPercentage}>45%</Text>
          </View>
        </View>

        <View style={styles.skillCard}>
          <Text style={styles.skillName}>MongoDB</Text>
          <View style={styles.skillProgressContainer}>
            <View style={styles.skillProgressBar}>
              <View style={[styles.skillProgressFill, { width: '70%', backgroundColor: '#17a2b8' }]} />
            </View>
            <Text style={styles.skillPercentage}>70%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  projectsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  projectDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  learningSection: {
    marginBottom: 20,
  },
  skillCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  skillProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillProgressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    marginRight: 10,
    overflow: 'hidden',
  },
  skillProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  skillPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 40,
  },
});

export default DashboardScreen;