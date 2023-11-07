pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // This step checks out your code from a version control system like Git
                git 'https://github.com/yamininagella/nodeapp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies using npm
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests for your Node.js application
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build your Node.js application, if needed
                // For example, using webpack or similar tools
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // This step is an example of deploying your Node.js application
                // It could be copying files to a server, deploying to a cloud platform, etc.
                sh 'npm run deploy'
            }
        }
    }
    post {
        always {
            // Clean up or perform some actions after the pipeline runs
                echo "always run"
        }       
        success {
            // Actions to perform on a successful build
                echo "always success"
        }
        failure {
            // Actions to perform on a failed build
                echo "never fails"
        }
    }
}
