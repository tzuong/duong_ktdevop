pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '=== CHECKOUT SOURCE ==='
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '=== INSTALL DEPENDENCIES ==='
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '=== BUILD PROJECT ==='
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo '=== DEPLOY PROJECT ==='

                sh '''
                    rm -rf deploy
                    mkdir -p deploy
                    cp -r dist/* deploy/
                '''

                echo '=== DEPLOY SUCCESS ==='
            }
        }
    }

    post {

        success {
            echo '================================'
            echo 'PIPELINE SUCCESS'
            echo '================================'
        }

        failure {
            echo '================================'
            echo 'PIPELINE FAILED'
            echo '================================'
        }
    }
}