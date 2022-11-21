pipeline {
    // agent any
    agent {
        node {
            label "deployment-node"
        }
    }
    
    tools { nodejs "nodejs:18" }
    
    stages {
        stage('build') {
            steps {
                echo 'Building...'
                sh 'rm -rf node_modules package-lock.json && npm install'
                /* Build the code?? */
            }
        }
        stage ("ESLint") {
            steps {
                echo "Eslinting..."
                sh ' eslint -f checkstyle *.js > eslint.xml'
            }
            post {
                always {
                    recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml')
                }
            }
        }
        stage('test') {
            steps {
                echo 'Testing...'
                
                sh 'npm test -- demoFuncs.test.js'
            }
        }
    }
}
