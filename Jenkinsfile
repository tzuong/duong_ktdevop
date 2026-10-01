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
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '=== BUILD PROJECT ==='
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo '=== DEPLOY PROJECT ==='

                bat '''
                    if not exist "C:\\inetpub\\wwwroot\\devops-test-thuyduong" mkdir "C:\\inetpub\\wwwroot\\devops-test-thuyduong"
                '''

                bat '''
                    xcopy /E /Y /I "dist\\*" "C:\\inetpub\\wwwroot\\devops-test-thuyduong\\"
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