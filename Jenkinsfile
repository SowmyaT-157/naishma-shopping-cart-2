pipeline{
    agent any
    tools{
       nodejs('Nodejs')
    }
    stages{
        stage('checkout to main'){
            steps{
               checkout scmGit(branches: [[name: '*/feature/customer-functionality']], extensions: [], userRemoteConfigs: [[credentialsId: 'GitHub-id', url: 'https://github.com/SowmyaT-157/naishma-shopping-cart-2.git']])
            }
        }
        stage('build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('test'){
            steps{
                sh 'npm run test'
            }
        }
        stage('check test coverage'){
            steps{
                sh 'npm test -- --coverage'
            }
        }
     
     }
    post{
         failure{
                mail to:'sowmya.t@everest.engineering',
                subject: "failed a pipeline",
                body: "In this build there is an error please check it once"
         }
    }
}